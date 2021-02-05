import React, { useState } from 'react'
import Link from 'next/link'
import PageTitle from '../components/page-title'
import {facebook, twitter, instagram, whatsapp} from '../utils/icon-variables'

const Contact = () => {

    //Contact form field variables
    const [ form, setForm, ] = useState({
        Name: '',
        Email: '',
        Phone: '',
        Message: ''
    })

    const [ success, setSuccess ] = useState(false)
    const [ resp, setResponse ] = useState({} )

    //save event: post form data into the spreadsheet calling saveContact.js
    const save = async () => {
        try {
            const response = await fetch('/api/saveContact', {
                method: 'POST',
                body: JSON.stringify(form)
            })
            const data = await response.json()
            setSuccess(true)
            setResponse(data)
        } catch (err) {
        }
    }

    //onChange event: attribute value to form field variables based on JSX form fields
    const onChange = evt => {
        const value = evt.target.value
        const key = evt.target.name
        setForm(old => ({
            //select and copy values from old form
            ...old,
            [key]: value
        }))
    }
    
    return (
    <div>
        <PageTitle title='Contact'/>
        <div className='container text-justify text-gray-500 p-6 mb-10'>
            <h1 className='text-gray-500 text-center font-bold my-4 text-2xl'>Contact</h1>
            <div className='leading-loose text-center'>
                <Link href=''>
                    <a className='inline-flex hover:pointer-events-auto'>
                        <img className='h-32 mx-4' src={facebook.src} alt={facebook.alt}/>
                    </a>
                </Link>
                <Link href=''>
                    <a className='inline-flex'>
                        <img className='h-32 mx-4' src={twitter.src} alt={twitter.alt}/>
                    </a>
                </Link>
                <Link href=''>
                    <a className='inline-flex'>
                        <img className='h-32 mx-4' src={instagram.src} alt={instagram.alt}/>
                    </a>
                </Link>
                <Link href=''>
                    <a className='inline-flex'>
                        <img className='h-32 mx-4' src={whatsapp.src} alt={whatsapp.alt}/>
                    </a>
                </Link>
            </div>
            <div className='w-1/2 mx-auto pb-6'>
                {/* If saveContact.js doesn't return a response, keep form onscreen */}
                {!success &&
                    <div>
                        <h2 className='text-gray-500 text-center font-bold my-4 text-xl'>Leave your message</h2>
                        <p className='text-gray-500 text-center mb-6'>
                            Contact <span className='text-yellow-600'>Restaurant X</span>.
                        </p>
                        <label className='font-bold text-gray-500'>Your name:</label>
                        <input type='text' className='w-full p-4 block bg-yellow-100 my-2 rounded text-black' placeholder='Name' onChange={onChange} name='Name' value={form.Name} />
                        <label className='font-bold text-gray-500'>Your email:</label>
                        <input type='email' className='w-full p-4 block bg-yellow-100 my-2 rounded text-black' placeholder='Email' onChange={onChange} name='Email'value={form.Email} />
                        <label className='font-bold text-gray-500'>Your phone number:</label>
                        <input type='tel' className='w-full p-4 block bg-yellow-100 my-2 rounded text-black' placeholder='Phone' onChange={onChange} name='Phone' value={form.Phone}/>
                        <label className='font-bold text-gray-500'>Message:</label>
                        <textarea className='w-full p-4 block bg-yellow-100 my-2 rounded text-black' placeholder='Message' onChange={onChange} name='Message' value={form.Message}/>
                        <div className='text-center'>
                            <button className='text-gray-900 bg-yellow-600 px-12 py-4 mt-10 font-bold rounded-lg shadow-inner hover:bg-yellow-500' onClick={save}>Send</button>
                        </div>
                    </div>
                }
                {/* If saveContact.js returns a response, thank customer*/}
                {success && 
                    <div className='mt-10 mx-auto'>
                        <p className='text-gray-800 bg-yellow-600 text-center font-bold mb-10 p-10'>
                            {resp.Name}, we thank you for your message. We will get back to you within 24 hours.
                        </p>
                    </div>
                }
            </div>
        </div>

    </div>   
    )
}

export default Contact