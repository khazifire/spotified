import Image from 'next/image';
import Link from 'next/link';

const Tracks = ({tracks, type}) => {
    const toMinutes =( millis) => {
        let minutes = Math.floor(millis / 60000);
        let seconds = ((millis % 60000) / 1000).toFixed(0);
        return (
          seconds == 60 ?(minutes+1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds);
      }
    return ( 
        <>
            {(type=="grid")?
                <div className='grid place-items-center md:place-items-start grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
                {tracks?.map((track,index) => (
                    <div className='inline-flex items-center gap-2' key={track?.album?.artists?.id}>
                    <div  className="flex flex-col gap-4 items-center">
                    
                        {track?.album?.images[0] && (
                        <Image 
                        src={track?.album?.images[0]?.url} 
                        alt={`${track?.name} profile picture`} 
                        width={200} 
                        height={200} 
                        blurDataURL="/default.png" 
                        placeholder="blur" 
                        className="object-cover object-center rounded-lg pointer-events-none" 
                        layout="fixed" />
                        )} 

                        <a href={track?.external_urls?.spotify} target="_blank" className='group inline-flex flex-col '> 
                        <h3 className='group-hover:text-green text-center w-48' >{track?.name}</h3>
                        <div className='flex flex-row justify-center gap-1'>
                            <i className="ri-user-6-line text-gray text-sm group-hover:text-white"></i>
                            <span className='text-sm text-gray group-hover:text-white'>{track?.artists[0]?.name}</span>
                            <i className="ri-timer-2-line text-sm text-gray group-hover:text-white "></i>
                            <span className='text-sm text-gray group-hover:text-white '> {toMinutes(track?.duration_ms)}</span>
                        </div>
                        </a>
                    </div>
                    </div>
                ))}
                </div>
                :
                <div className='flex flex-col gap-4'>
                {tracks?.slice(0,5).map((track,index) => (
                    <div className='inline-flex items-center gap-2' key={track?.album?.artists?.id}>
                    <span className="lg:hidden">{index+1}.</span>
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
                            <i className="ri-user-6-line text-gray text-sm group-hover:text-white"></i>
                            <span className='text-sm text-gray group-hover:text-white'>{track?.artists[0]?.name}</span>
                            <i className="ri-timer-2-line text-sm text-gray "></i>
                            <span className='text-sm text-gray'> {toMinutes(track?.duration_ms)}</span>
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
 
export default Tracks;