import {useSession, signIn, signOut} from 'next-auth/react';
import {useState} from 'react';
import {usePlaylist, useTopTracks, useTopArtists, useTrackAudioFeature} from '../lib/fetcher'
export default function Home() {
  const {data: session} = useSession();
  const {playlists,isLoading,isError} = usePlaylist();
  const {tracks,isLoadingTracks,isErrorTracks} = useTopTracks();
  const {artists,isLoadingArtists,isErrorArtists} = useTopArtists();


  console.log(tracks)


  // console.log(tracks, "top tracks")
  // console.log(artists, "top artists")

  //console.log(feature,"feature rtacks")
  if (session) {
    return (
      <>
        Signed in as {session?.token?.name} <br />
        <button onClick={() => signOut()}>Sign out </button>
        <hr />
        <button onClick={() => getMyPlaylists()}>Get all my playlists</button>
<div className='container mx-auto px-24 '>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-24 gap-y-8 '>
            {playlists?.map((item) => (
              <a key={item.id} href={item.external_urls.spotify} target="blank">
              <div className='text-center' >
                <img src={item.images[0]?.url}  />
                <p className='mt-2'>{item.name}</p>
                <p className='text-sm text-grey'>{item.tracks.total} tracks <a target="blank" href={item.owner.external_urls.spotify} className='text-sm text-green hover:text-green2'>By {item.owner.display_name}</a>
              </p>
              </div>
              </a>
            ))}
        </div>
</div>
        
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in </button>
    </>
  );
}