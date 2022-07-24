import {useSession, signIn, signOut} from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';
import TopArtists from '../components/TopArtists';
import TopTracks from '../components/TopTracks';
import {usePlaylist, useTopTracks, useTopArtists, useTrackAudioFeature, useUser} from '../lib/fetcher'

export default function Home() {
  const {data: session} = useSession();
 // const {user,isLoadingUser,isErrorUser} = useUser();
  // const {playlists,isLoading,isError} = usePlaylist();
  const {tracks,isLoadingTracks,isErrorTracks} = useTopTracks();
  const {artists,isLoadingArtists,isErrorArtists} = useTopArtists();
  console.log(tracks)
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
              <a href={`https://open.spotify.com/user/${session?.token?.sub}`} target={"_blank"} className="text-gray inline-flex gap-2 group">Spotify Profile
              <i class="ri-share-box-line text-gray group-hover:text-green2"></i>
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