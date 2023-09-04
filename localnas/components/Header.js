'use client'
import Image from "next/image"
import icon from '@public/favicon.png'
import Link from "next/link"
// import ClientComponent from "./ClientComponent";
import { useState } from "react"
import bar from '@public/Icons/bar.png'

const Header = () => {
  const [navBar, setNavBar] = useState(false)
  return (
    // <ClientComponent>
    <header className='sticky flex flex-row justify-right lg:flex-row top-0 z-10 bg-white outline outline-1 outline-slate-200'>
      <Link href='/'>
        <div className='flex flex-row p-0 items-center justify-items-center justify-self-center'>
          <Image alt='' className='h-20 w-20' src={icon} />
          <h1 className=' text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-yellow-700'>LocalNAS</h1>
        </div></Link>
      <ul className='hidden lg:flex flex flex-row align-items-center justify-center'>
        <li className='hover-underline-animation text-zinc-600 font-medium'><Link href="/" className="text-center">Home</Link></li>
        <li className='hover-underline-animation text-zinc-600 font-medium'><Link href="/documents" className="text-center">Documents</Link></li>
        <li className='hover-underline-animation text-zinc-600 font-medium'><Link href="/media" className="text-center">Media</Link></li>
        <li className='hover-underline-animation text-zinc-600 font-medium'><Link href="/compressed" className="text-center">Compressed</Link></li>
        <li className='hover-underline-animation text-zinc-600 font-medium'><Link href="/others" className="text-center">Others</Link></li>
      </ul>
      <Link className='lg:hidden' href=''><Image className="lg:hidden h-8 w-7" alt='' src={bar} key="hek" onClick={() => setNavBar(!navBar)} /></Link>
      {
        navBar && (
          <div className="mx-5 md:mx-10 absolute origin-top-right	 transition w-fit lg:hidden ease-in-out duration-500 right-0 z-10 mt-50 top-16 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div className="py-2 px-4 flex flex-col items-center justify-center" role="none">
              <Link href="/" className="hover-underline-animation text-gray-700 block px-4 py-2 text-md">Home</Link>
              <Link href="/documents" className="hover-underline-animation text-gray-700 block px-4 py-2 text-md">Documents</Link>
              <Link href="/media" className="hover-underline-animation text-gray-700 block px-4 py-2 text-md">Media</Link>
              <Link href="/compressed" className="hover-underline-animation text-gray-700 block px-4 py-2 text-md">Compressed</Link>
              <Link href="/others" className="hover-underline-animation text-gray-700 block px-4 py-2 text-md">Others</Link>
            </div>
          </div>
          // <div>
          // <ul className='lg:hidden  lg:flex flex flex-col'>
          //   <li className='hover-underline-animation text-zinc-600 font-medium'><Link href="/">Home</Link></li>
          //   <li className='hover-underline-animation text-zinc-600 font-medium'><Link href="/documents">Documents</Link></li>
          //   <li className='hover-underline-animation text-zinc-600 font-medium'><Link href="/media">Media</Link></li>
          //   <li className='hover-underline-animation text-zinc-600 font-medium'><Link href="/compressed">Compressed</Link></li>
          // </ul>
        )}
    </header>
    // </ClientComponent>
  )
}

export default Header