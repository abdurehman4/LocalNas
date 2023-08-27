import Layout from '@/components/Layout';
import '@styles/globals.css'
import Head from 'next/head'
import { figtree } from '@/components/fonts';


export const metadata = {
  title: 'LocalNAS',
  description: 'An incomplete project!'
}

function RootLayout ({children}){
  return (
    <html>

{/* <Head>
        <title>LocalNAS</title>
      </Head> */}
      <main className={figtree.className}>
      <Layout>
      <div>{children}</div>
      </Layout>
      </main>
    </html>
  )
}

export default RootLayout;