import {useSession, getSession} from 'next-auth/react';
import Image from 'next/image';
import Meta from '../components/meta';
import TopArtists from '../components/TopArtists';
import TopTracks from '../components/TopTracks';
import {useTopTracks, useTopArtists} from '../lib/fetcher'
import Loading from '../components/Loading'

export default function Home() {
  const {data: session} = useSession();
  const {tracks,isLoadingTracks,isErrorTracks} = useTopTracks();
  const {artists,isLoadingArtists,isErrorArtists} = useTopArtists();

  if(isLoadingTracks || isLoadingArtists){
    return <Loading />
  } 
  return (
      <>
          <section className='flex flex-col md:flex-row gap-8 items-center'>
              
            <div className='border-gray border-opacity-30 border-2 rounded-full pt-2 px-2' >
              {session?.token?.picture && (
                <Image 
                src={session?.token?.picture} 
                alt={`${session?.token?.name} profile picture`} 
                width={200} 
                height={200} 
                blurDataURL="/default.png" 
                placeholder="blur" 
                className="object-cover object-center rounded-full pointer-events-none" 
                layout="fixed" />
              )} 
            </div>

            <div className='text-center lg:text-left'>
                <h1 className='text-5xl'>{session?.token?.name}</h1>
                <a href={`https://open.spotify.com/user/${session?.token?.sub}`} target={"_blank"} rel="noopener noreferrer" className="text-gray inline-flex gap-2 group">Spotify Profile
                <i className="ri-share-box-line text-gray group-hover:text-green2"></i>
                </a>
            </div>
    
          </section>
          <hr className='my-8'></hr>
          
            <session className="flex flex-col  lg:flex-row lg:gap-16">
              <TopArtists artists={artists} />
              <hr className='my-8 lg:hidden'></hr>
              <TopTracks tracks={tracks} />
            </session>
      </>
 
  );
}

export async function getServerSideProps(context){
  const session = await getSession(context);

  if(!session)
    return{
      redirect:{
        destination: 'signin',
        permanent: false,
      }
    };
  return {
    props: {session}
  }
}