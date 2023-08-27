import Image from "next/image"
import icon from '@public/favicon.png'
import Link from "next/link"

function Header() {
  return (
    <header className='sticky top-0 z-10 bg-white outline outline-1 outline-slate-200'>
        <div className='flex flex-row p-0 items-center justify-items-center justify-self-center'>
        <div><Image alt='' className='h-20 w-20' src={icon}/></div>
        <h1 className='pl-30 text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-yellow-700'>LocalNAS</h1>
        </div>
        <ul className='hidden md:flex flex flex-row'>
          <li className='hover-underline-animation text-zinc-600 font-medium'><Link href="/">Home</Link></li>
          <li className='hover-underline-animation text-zinc-600 font-medium'><Link href="/documents">Documents</Link></li>
          <li className='hover-underline-animation text-zinc-600 font-medium'><Link href="/media">Media</Link></li>
          <li className='hover-underline-animation text-zinc-600 font-medium'><Link href="/compressed">Compressed</Link></li>
        </ul>
      </header>
  )
}

export default Header