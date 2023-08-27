import Filecard from "./Filecard";
const HomeData  = ({Files})=>{
        if (Files.array.length == 0) {
          return null;
        } else {
          return <div key={Files.name} className='w-min-full w-max-full my-2 sm:mx-15 md:mx-24 mx-10 flex flex-col justify-center'>
            <h2 className='text-4xl font-semibold w-fit w-max-fit border-solid border-b-1'>{Files.name}</h2>
            <div className='flex flex-column w-full'>
              <div className='flex flex-wrap justify-center m-3 md:m-10 w-full'>
                {
                  (Files.array).map(
                    (file) => <Filecard name={file.at(0)} key={file.at(1)} extension={file.at(2)} />
                  )
                }
              </div>
            </div>
            </div>
        }}

export default HomeData;