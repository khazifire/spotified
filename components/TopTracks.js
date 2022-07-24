import Link from 'next/link';
import Image from 'next/image';


const TopTracks = ({tracks}) => {
  const toMinutes =( millis) => {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return (
      seconds == 60 ?(minutes+1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds);
  }
    return ( 
        <section className='flex flex-col gap-6'>
          <div className='inline-flex gap-8 items-center'>
              <h2>Top Tracks of All Time </h2>
              <Link href={"#"} >
                <a className='md:text-center text-xs p-4 border-white border-2 rounded-full text-white py-1 hover:bg-white hover:text-black font-medium'>
                  SEE MORE
                </a>
              </Link>
          </div>

          <div className='flex flex-col gap-4'>
          {tracks?.slice(0,10).map((track,index) => (
              <div className='inline-flex items-center gap-2' key={track?.album?.artists?.id}>
                <span>{index+1}.</span>
                <div  className="flex flex-row gap-6 items-center">
               
                  {track?.album?.images[0] && (
                    <Image 
                    src={track?.album?.images[0]?.url} 
                    alt={`${""} profile picture`} 
                    width={80} 
                    height={80} 
                    blurDataURL="/default.png" 
                    placeholder="blur" 
                    className="object-cover object-center rounded-l-full pointer-events-none" 
                    layout="fixed" />
                  )} 

                  <a href={track?.external_urls?.spotify} target="_blank" className='group inline-flex flex-col '> 
                    <h3 className='group-hover:text-green'>{track?.name}</h3>
                    <div className='inline-flex items-center gap-1'>
                      <i class="ri-user-6-line text-gray text-sm group-hover:text-white"></i>
                      <span className='text-sm text-gray group-hover:text-white'>{track?.artists[0]?.name}</span>
                      <i class="ri-timer-2-line text-sm text-gray "></i>
                      <span className='text-sm text-gray'> {toMinutes(track?.duration_ms)}</span>
                    </div>
                  </a>
                </div>
              </div>
          ))}
          </div>

         
        </section>
     );
}
 
export default TopTracks;