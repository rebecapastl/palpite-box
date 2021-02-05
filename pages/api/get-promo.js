import { GoogleSpreadsheet } from 'google-spreadsheet'
import { fromBase64 } from '../../utils/base64'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID) //address at spreadsheet URL

export default async (req, res) => {

    try {
        //using environment variable
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
        })
        await doc.loadInfo()
        
        //fetch information from sheet in index 3 
        const sheet = doc.sheetsByIndex[3]
        //which cells to read
        await sheet.loadCells('A2:B2')
       
        //select cell at line 1 column 0
        const showPromoCell = sheet.getCell(1, 0)

        //select cell at line 1 column 1
        const textCell = sheet.getCell(1, 1)

        //only fetch values if promo is set to true 
        res.end(JSON.stringify({
            showCoupon: showPromoCell.value === true,
            message: textCell.value
        }))

    } catch (err) {
        res.end(JSON.stringify({
            showCoupon: false,
            message: ''
        }))
    }


}