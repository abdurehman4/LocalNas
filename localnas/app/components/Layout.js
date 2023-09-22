// import { Figtree } from 'next/font/google'
import '@styles/globals.css'
// import Link from 'next/link'?
import Head from 'next/head'
import Header from './Header.js'

export default function Layout({ children }) {
    return (
      <div>
        <Head>
        <title>LocalNAS</title>
      </Head>
      <div>
        <Header/>
        {children}</div>
      </div>
    )
  }