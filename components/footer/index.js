import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <React.Fragment>
            <div className='text-gray-500 ml-2'>
                <p className='block text-yellow-600'>Rebeca Pastl</p>
                <a className='inline-flex' href='https://www.linkedin.com/in/rebeca-pastl-b4b000116/'>
                    <img className='h-12' src='/images/linkedin.svg' alt='LinkedIn'/>
                </a> 
                <a className='inline-flex' href='https://github.com/RebecaPastl'>
                    <img className='h-12' src='/images/github.svg' alt='GitHub'/>
                </a> 
            </div>
            <div className='bg-gray-900 p-2 pin-b'>
                <div className='text-center mt-2'>
                    <img className='h-24 p-4 mx-auto inline' src='/images/logo_semana_fsm.png' alt='Semana Fullstack Master'/>
                    <img className='h-24 p-4 mx-auto inline' src='/images/logo_devpleno.png' alt='DevPleno'/>
                </div>
            </div>
        </React.Fragment>
    ) 
}

export default Footer