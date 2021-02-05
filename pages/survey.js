import React, { useState } from 'react'
import PageTitle from '../components/page-title'

const Survey = () => {

    //Survey form field variables
    const [ form, setForm, ] = useState({
        Name: '',
        Email: '',
        Phone: '',
        Rate: 0
    })

    //possible rate values
    const rates = [0, 1, 2, 3, 4, 5]
    
    const [ success, setSuccess ] = useState(false)
    const [ resp, setResponse ] = useState({} )
    
    //save event: post form data into the spreadsheet calling save.js
    const save = async () => {
        try {
            const response = await fetch('/api/save', {
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
        <div className='pt-6'>
            <PageTitle title='Survey'/>
            <h1 className='text-gray-500 text-center font-bold my-4 text-2xl'>Survey</h1>
            <p className='text-gray-500 text-center mb-6'>
                At <span className='text-yellow-600'>Restaurante X</span> we always seek to better serve our customers.<br/>
                For this reason, we would appreciate hearing your thoughts.
            </p>
            {/* If save.js doesn't return a response, keep form onscreen */}
            {!success &&
                <div className='w-1/4 mx-auto pb-6'>
                    <label className='font-bold text-gray-500'>Your name:</label>
                    <input type='text' className='w-full p-4 block bg-yellow-100 my-2 rounded' placeholder='Name' onChange={onChange} name='Name' value={form.Name} />
                    <label className='font-bold text-gray-500'>Your email:</label>
                    <input type='email' className='w-full p-4 block bg-yellow-100 my-2 rounded' placeholder='Email' onChange={onChange} name='Email' value={form.Email} />
                    <label className='font-bold text-gray-500'>Your phone number:</label>
                    <input type='tel' className='w-full p-4 block bg-yellow-100 my-2 rounded' placeholder='Phone' onChange={onChange} name='Phone' value={form.Phone}/>
                    <label className='font-bold text-gray-500'>Rate:</label>
                    <div className='flex pb-10'>
                    {rates.map(rate => {
                        return (
                            <label className='block w-1/6 text-center'>
                                <img src={'/images/emoji'+ rate + '.svg'} alt='Rate'></img>
                                <input className='bg-pink-600' type='radio' name='Rate' value={rate} onChange={onChange}/>
                            </label>
                        )
                    })}
                    </div>
                    <div className='text-center'>
                    <button className='text-gray-900 bg-yellow-600 px-12 py-4 font-bold rounded-lg shadow-inner hover:bg-yellow-500' onClick={save}>Save</button>
                    </div>
                </div>
            }
            {/* If save.js returns a response*/}
            {success && 
            <div className='w-1/3 mx-auto'>
                <p className='mb-4 text-center text-gray-500 px-4 py-4'>We thank you for your opinion.</p>
                {/* Show promo code*/}
                {
                    resp.showCoupon &&
                    <div className='bg-yellow-600 text-gray-200 text-center p-4 mb-4'>
                        <p>Your promo code:</p> 
                        <span className='font-bold text-2xl'>{resp.Coupon}</span>
                    </div>
                }
                {/* Show benefit */}
                {
                    resp.showCoupon &&
                    <div className='text-center text-yellow-600 p-4'>
                        <span className='font-bold block'>{resp.Promo}</span>
                        <span className='italic'>Save this screen and show it to our staff the next time you visit us.</span>
                    </div>
                }
            </div>}
        </div>
    )
}

export default Survey