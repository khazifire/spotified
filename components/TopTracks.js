import Link from 'next/link';
import Image from 'next/image';
import Tracks from './tracks';


const TopTracks = ({tracks, type="list"}) => {

    return ( 
        <section className='flex flex-col gap-6'>
          <div className={type=='grid'?'hidden':'inline-flex gap-8 items-center'}>
              <h2>Top Tracks of All Time </h2>
              <Link href={"/topTracks"} >
                <a className='btn'>
                  SEE MORE
                </a>
              </Link>
          </div>

          <Tracks tracks={tracks} type={type} />

        </section>
     );
}
 
export default TopTracks;