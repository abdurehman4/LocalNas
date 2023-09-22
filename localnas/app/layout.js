// 'use client'
import '@styles/globals.css'
import { figtree } from '@/app/components/fonts';
import Head from 'next/head';
import Header from '@app/components/Header';

export const metadata = {
  title: 'LocalNAS',
  description: 'An incomplete project!'
}

function RootLayout ({children}){
  
  return (
    <html>
      <Head>
        <title>LocalNAS</title>
      </Head>
      <body className={figtree.className}>
      <Header/>
      <div>{children}</div>
      </body>
    </html>
  )
}

export default RootLayout;