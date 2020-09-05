import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <React.Fragment>
            <div className='bg-gray-700 p-2'>
                <div className='container mx-auto text-center font-bold text-white'>
                    Projeto desenvolvido por: Rebeca Pastl / {' '} 
                    <a className='px-2 hover:underline' href='https://www.linkedin.com/in/rebeca-pastl-b4b000116/'>LinkedIn</a> / {' '} 
                    <a className='px-2 hover:underline' href='https://github.com/RebecaPastl'>Github</a> 
                    <div className='mt-2'>
                        <img className='h-24 p-4 mx-auto inline' src='/images/logo_semana_fsm.png' alt='Semana Fullstack Master'/>
                        <img className='h-24 p-4 mx-auto inline' src='/images/logo_devpleno.png' alt='DevPleno'/>
                    </div>
                </div>
            </div>

        </React.Fragment>
    ) 
}

export default Footer