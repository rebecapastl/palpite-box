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

    //fecth which promo is valid calling get-promo.js
    const { data, error } = useSWR('api/get-promo', fetcher)

    return (
        <div>
            <PageTitle title='Seja bem-vindo'/>
            <p className='text-gray-500 mt-12 text-center'>
                At <span className='text-yellow-600'>Restaurante X</span> we always seek to better serve our customers.<br/>
                For this reason, we would appreciate hearing your thoughts.
            </p>
            <div className='text-center my-12'>
                <Link href='/survey'>
                    <a className='text-gray-900 bg-yellow-600 px-12 py-4 font-bold rounded-lg shadow-lg hover:bg-yellow-500'>Rate our service</a>
                </Link>
            </div>  
            {/* If get-promo.js doesn't return a value, keep showing the loading icon */}
            { !data && <div className='text-center text-gray-500'>
                    <svg class='animate-spin inline -ml-1 mr-3 h-5 w-5 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                        <circle class='opacity-50' cx='12' cy='12' r='10' stroke='currentColor' stroke-width='10'></circle>
                    </svg>
                    Loading
                </div>
            }
            {/* If get-promo.js returns a value, show promo text */}
            { !error && data && data.showCoupon &&
            <p className='text-yellow-600 my-12 text-center'>
                {data.message}
            </p>  
            }
        </div>
    )
}

export default Index