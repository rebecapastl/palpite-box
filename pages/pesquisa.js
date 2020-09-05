import React, { useState } from 'react'
import PageTitle from '../components/page-title'

const Pesquisa = () => {
    const [ form, setForm, ] = useState({
        Nome: '',
        Email: '',
        Whatsapp: '',
        Nota: 0
    })
    const notas = [0, 1, 2, 3, 4, 5]
    const [ success, setSuccess ] = useState(false)
    const [ retorno, setRetorno ] = useState({} )
    const save = async () => {
        try {
            const response = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            })
            const data = await response.json()
            setSuccess(true)
            setRetorno(data)
        } catch (err) {
        }
    }

    const onChange = evt => {
        const value = evt.target.value
        const key = evt.target.name
        setForm(old => ({
            //selecionar tudo do formulário antigo e copiar
            ...old,
            [key]: value
        }))
    }
    return (
        <div className='pt-6'>
            <PageTitle title='Pesquisa'/>
            <h1 className='text-center font-bold my-4 text-2xl'>Críticas e sugestões</h1>
            <p className='text-center mb-6'>
                O restaurante X sempre busca por atender melhor seus clientes.<br/>
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            {!success && 
            <div className='w-1/5 mx-auto pb-6'>
                <label className='font-bold'>Seu nome:</label>
                <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome}/>
                <label className='font-bold'>Seu email:</label>
                <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Email' onChange={onChange} name='Email'value={form.Email}/>
                <label className='font-bold'>Seu whatsapp:</label>
                <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Whatsapp' onChange={onChange} name='Whatsapp' value={form.Whatsapp}/>
                <label className='font-bold'>Nota:</label>
                <div className='flex py-6'>
                    {notas.map(nota => {
                        return (
                            <label className='block w-1/6 text-center'>
                                <p>{nota}</p>
                                <input type='radio' name='Nota' value={nota} onChange={onChange}/>
                            </label>
                        )
                    })}
                </div>
                <button className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow' onClick={save}>Salvar</button>
            </div>
            }
            {success && 
            <div className='w-1/5 mx-auto'>
                <p className='mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'>Agradecemos por contribuir com sua sugestão e/ou crítica.</p>
                {
                    retorno.showCoupon &&
                    <div className='text-center border p-4 mb-4'>
                        <p>Seu cupom:</p> 
                        <span className='font-bold text-2xl'>{retorno.Cupom}</span>
                    </div>
                }
                {
                    retorno.showCoupon &&
                    <div className='text-center border p-4 mb-4'>
                        <span className='font-bold block mb-2'>{retorno.Promo}</span>
                        <span className='italic'>Tire um print ou foto desta tela e apresente ao garçom.</span>
                    </div>
                }
            </div>}  
        </div>
    )
}

export default Pesquisa