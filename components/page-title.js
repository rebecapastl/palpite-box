import React from 'react'
import Head from 'next/head'

const PageTitle = ({title}) => {
    return (
        <Head>
            <title>{title} - PalpiteBox</title>
            <link rel='shortcut icon' type='image/png' href='/images/favicon.ico'/>
        </Head>
    )
}

export default PageTitle