import Link from 'next/link';
import Image from 'next/image';


const TopArtists = ({artists}) => {
    return ( 
        <section className='flex flex-col gap-6'>
          <div className='inline-flex gap-8 items-center'>
              <h2>Top Artists of All Time</h2>
              <Link href={"/#"} >
                <a className='btn'>
                  SEE MORE
                </a>
              </Link>
          </div>

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

         
        </section>
     );
}
 
export default TopArtists;