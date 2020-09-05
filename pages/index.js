import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/page-title'

//criada uma função que: pega os argumentos e lança numa função 'fetch', depois do fetch os resultados são passados para o JSON

/*no return da funcao Index, criar um IF no react, para caso os dados não estejam ainda carregados
{ !data && <p>Carregando...</p> }
e criar um IF no React, para caso os dados sejam carregados
{ !error && data && data.showCoupon &&
<p className='my-12 text-center'>
    {data.message}
</p>  
}*/
const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
    const { data, error } = useSWR('api/get-promo', fetcher)
    return (
        <div>
            <PageTitle title='Seja bem-vindo'/>
            <p className='mt-12 text-center'>
                O restaurante X sempre busca por atender melhor seus clientes.<br/>
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            <div className='text-center my-12'>
                <Link href='/pesquisa'>
                    <a className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow'>Dar opinião ou sugestão</a>
                </Link>
            </div>  
            { !data && <p className='text-center pb-6'>Carregando...</p> }
            { !error && data && data.showCoupon &&
            <p className='my-12 text-center'>
                {data.message}
            </p>  
            }
        </div>
    )
}

export default Index