import { Comic_Neue } from 'next/font/google'
import { Figtree } from 'next/font/google'

export const comic_Neue= Comic_Neue({
    weight:['400','700'],
    subsets: ['latin'],
    variable: '--font-comic'
  })


export const figtree = Figtree({
    weight: ['400','500','600','900'],
    subsets:['latin']
  })