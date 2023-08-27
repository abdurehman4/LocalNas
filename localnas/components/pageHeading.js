import { comic_Neue } from "./fonts"
function PageHeading({
    heading
}) {
  return (
    <div className='min-w-full max-w-full'>
        <p style={comic_Neue.style} className='page-heading prevent-select px-20 mt-0 py-20 leading-tight bg-gradient-to-r  text-transparent from-green-700 to-yellow-600 text-center m-10 font-semibold capitalize text-4xl sm:text-5xl md:text-6xl  bg-clip-text'>{heading}</p>
      </div>
  )
}

export default PageHeading