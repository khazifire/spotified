import Image from 'next/image';
const Artists = ({artists, type}) => {
    return ( 
        <>
        {(type=="grid")?
            <div className='grid place-items-center md:place-items-start grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
            {artists?.map((artist,index) => (
                <div className='inline-flex items-center gap-2'>
                  <div className="group flex flex-col gap-6 items-center hover:shadow-2xl bg-gray bg-opacity-5 rounded-lg p-1">
                    <a href={artist?.external_urls?.spotify} target="_blank" className='inline-flex flex-col '> 
                        <div className='border-gray group-hover:border-green group-hover:border-opacity-40 border-opacity-30 border-2 rounded-full pt-2 px-2' >
                            {artist?.images[1] && (
                            <Image 
                            src={artist?.images[1].url} 
                            alt={`${artist?.name} profile picture`} 
                            width={200} 
                            height={200} 
                            blurDataURL="/default.png" 
                            placeholder="blur" 
                            className="object-cover object-center rounded-full pointer-events-none" 
                            layout="fixed" />
                            )} 
                        </div>
  
                        <h3 className='text-center mt-2'>{artist?.name}</h3>
                        <div className='inline-flex items-center gap-1 justify-center mb-1'>
                            <i className="ri-group-line text-gray text-sm"></i>
                            <span className='text-sm text-gray'>{artist?.followers?.total}</span>
                            <i className="ml-4 ri-share-box-line text-gray group-hover:text-green2 group-hover:text-opacity-40 "></i>
                        </div>
                    </a>
                  </div>
                </div>
            ))}
            </div>
            :
            <div className='flex flex-col gap-4'>
            {artists?.slice(0,5).map((artist,index) => (
                <div className='inline-flex items-center gap-2'>
                    <span>{index+1}.</span>
                    <div  className="flex flex-row gap-6 items-center">
                    {artist?.images[1] && (
                        <Image 
                        src={artist?.images[1].url} 
                        alt={`${artist?.name} profile picture`} 
                        width={80} 
                        height={80} 
                        blurDataURL="/default.png" 
                        placeholder="blur" 
                        className="object-cover object-center rounded-r-full pointer-events-none" 
                        layout="fixed" />
                    )} 

                    <a href={artist?.external_urls?.spotify} target="_blank" className='group inline-flex flex-col '> 
                        <h3 className='group-hover:text-green'>{artist?.name}</h3>
                        <div className='inline-flex items-center gap-1'>
                        <i className="ri-group-line text-gray text-sm"></i>
                        <span className='text-sm text-gray'>{artist?.followers?.total}</span>
                        </div>
                    </a>
                    </div>
                </div>
            ))}
            </div>
        }
        </>
     );
}
 
export default Artists;