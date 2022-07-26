import Link from 'next/link';
import Image from 'next/image';
import Artists from './artists';


const TopArtists = ({artists, type="list"}) => {
    return ( 
        <section className='flex flex-col gap-6'>
          <div className={type=='grid'?'hidden':'inline-flex gap-8 items-center'}>
              <h2>Top Artists of All Time</h2>
              <Link href={"/topArtists"} >
                <a className='btn'>
                  SEE MORE
                </a>
              </Link>
          </div>

          <Artists artists={artists} type={type} />

         
        </section>
     );
}
 
export default TopArtists;