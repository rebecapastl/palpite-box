import { GoogleSpreadsheet } from 'google-spreadsheet'
//para preencher a data
import moment from 'moment'
import { fromBase64 } from '../../utils/base64'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID) //endereco na url da planilha

const genCupom = () => {
    //num sistema tão pequeno, é imporvável que dois cumpons sejam gerados no mesmo milisegundo, então podemos gerar o valor do cupom com base na data/hora onde SSS é formatação para milisegundos
    //toString(16) converte o numero gerado com base na data numa string em hexadecimal
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
        
        //pegar dados da planilha Configurações para preencher os dados de CUPOM e PROMO ativos no momento, na planilha Resultado
        const sheetConfig = doc.sheetsByIndex[2]
        await sheetConfig.loadCells('A2:B2')
        const mostrarPromocaoCell = sheetConfig .getCell(1, 0)
        const textoCell = sheetConfig.getCell(1, 1)

        let Cupom = ''
        let Promo = ''
        if (mostrarPromocaoCell.value === 'VERDADEIRO') {
            
            Cupom = genCupom()
            Promo = textoCell.value
        } 

        //adicionar dados à planilha usando como referência o cabeçalho
        await sheet.addRow({
            Nome: data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            Nota: parseInt(data.Nota),
            Cupom,
            Promo,
            'Data Preenchimento': moment().format('DD/MM/YYYY, HH:mm:ss')
        })
        //se o valor do cupom não estiver vazio (ou eja, for gerado corretamente), apresentar o valor em tela 
        res.end(JSON.stringify({
            showCoupon: Cupom !== '',
            Cupom,
            Promo
        }))
    } catch (err) {
        console.log(err)
        res.end('error')
    }
}