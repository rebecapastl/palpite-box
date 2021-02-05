import { GoogleSpreadsheet } from 'google-spreadsheet'
//to fill date
import moment from 'moment'
import { fromBase64 } from '../../utils/base64'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID) //address at spreadsheet URL

export default async (req, res) => {
    try {
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
        })
        await doc.loadInfo()
        const sheet = doc.sheetsByIndex[2]
        const data = JSON.parse(req.body)

        //using spreadsheet title words as reference to add data to spreadsheet
        await sheet.addRow({
            Name: data.Name,
            Email: data.Email,
            Phone: data.Phone,
            Message: data.Message,
            'Message date': moment().format('DD/MM/YYYY, HH:mm:ss')
        })

        res.end(JSON.stringify({
            Name:data.Name
        }))

    } catch (err) {
        console.log(err)
        res.end('error')
    }
}