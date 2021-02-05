import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

const Header = () => {
    return (
        <React.Fragment>
            <div className={styles.wrapper}>
                <div className='container mx-auto'>
                <Link href='/'>
                    <a>
                        <img className='mt-12 transform scale-150 h-32 mx-auto' src='/images/palpite-box.svg' alt='PalpiteBox'/>
                    </a>
                </Link>
                </div>
            </div>
            <div className='text-gray-500 bg-gray-900 p-4 shadow-md text-center'>
                <Link href='/about'>
                    <a className='mx-4 px-2 hover:text-yellow-600'>About</a>
                </Link>
                <Link href='/contact'>
                    <a className='mx-4 px-2 hover:text-yellow-600'>Contact</a>
                </Link>
                <Link href='/survey'>
                    <a className='mx-4 px-2 hover:text-yellow-600'>Survey</a>
                </Link>
            </div>
        </React.Fragment>
    ) 
}

export default Header