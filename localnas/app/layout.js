// 'use client'
import '@styles/globals.css'
import { figtree } from '@/components/fonts';
import Head from 'next/head';
// import Header from '@/components/Header';

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
      <main className={figtree.className}>
      <div>{children}</div>
      </main>
    </html>
  )
}

export default RootLayout;