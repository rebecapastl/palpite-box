import { GoogleSpreadsheet } from 'google-spreadsheet'
//to fill date
import moment from 'moment'
import { fromBase64 } from '../../utils/base64'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID) //address at spreadsheet URL

const genCoupon = () => {
    //in such a small system, it is not probable to generate two codes at the same milisecond, so the code can be generated based on date/hour where SSS represents miliseconds
    //toString(16) convert the generated number based  on the date/time into a hexadecimal string
    const code = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase()
    return code.substr(0,4) + '-' + code.substr(4,4) + '-' + code.substr(8,4) 
}

export default async (req, res) => {
    try {
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
        })
        await doc.loadInfo()
        const sheet = doc.sheetsByIndex[1]
        const data = JSON.parse(req.body)
        
        //fetch the Config sheet data to fill the Coupon and Promo fields at the Survey sheet
        const sheetConfig = doc.sheetsByIndex[3]
        await sheetConfig.loadCells('A2:B2')
        const showPromoCell = sheetConfig .getCell(1, 0)
        const textCell = sheetConfig.getCell(1, 1)

        let Coupon = ''
        let Promo = ''
        if (showPromoCell.value === true) {
            
            Coupon = genCoupon()
            Promo = textCell.value
        }

        //using spreadsheet title words as reference to add data to spreadsheet
        await sheet.addRow({
            Name: data.Name,
            Email: data.Email,
            Phone: data.Phone,
            Rate: parseInt(data.Rate),
            Coupon,
            Promo,
            'Survey date': moment().format('DD/MM/YYYY, HH:mm:ss')
        })
        //if Coupon is not empty (that is to say, the number was generated correctly), print value onscreen 
        res.end(JSON.stringify({
            showCoupon: Coupon !== '',
            Coupon,
            Promo
        }))
        
    } catch (err) {
        console.log(err)
        res.end('error')
    }
}