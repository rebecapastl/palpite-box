import { GoogleSpreadsheet } from 'google-spreadsheet'
import { fromBase64 } from '../../utils/base64'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID) //endereco na url da planilha

export default async (req, res) => {

    try {
        //ao invés de usar o arquivo credentials 'await doc.useServiceAccountAuth(credentials)', que tem como atributos 'client_email' e 'private_key', é melhor prática usar os atributos como um objeto e 
        //atribuir seus valores a variáveis locais, definidas no arquivo .env.local que é visível apenas no backend 'await doc.useServiceAccountAuth({client_email:,private_key})' 
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
        })
        await doc.loadInfo()
        
        //captura a planilha na posicao de indice 2 (Configurações)
        const sheet = doc.sheetsByIndex[2]
        //que células ler
        await sheet.loadCells('A2:B2')
       
        //selecionar a cell na linha 1 coluna 0
        const mostrarPromocaoCell = sheet.getCell(1, 0)

        //selecionar a cell da linha 1 coluna 1 
        const textoCell = sheet.getCell(1, 1)


        res.end(JSON.stringify({
            showCoupon: mostrarPromocaoCell.value === 'VERDADEIRO',
            message: textoCell.value
        }))

    } catch (err) {
        res.end(JSON.stringify({
            showCoupon: false,
            message: ''
        }))
    }


}