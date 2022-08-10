import {getSession} from 'next-auth/react';
import {useEffect, useState} from 'react';
import TopTracks from '../components/TopTracks';
import {useTopTracksMid, useTopTracksLong, useTopTracks} from '../lib/fetcher'
import Loading from '../components/Loading';

export default function TopTracksPage() {

  const {tracks,isLoadingTracks,isErrorTracks} = useTopTracks();
  const {trackMid,isLoading2,isError2} = useTopTracksMid();
  const {tracksLong,isLoading3,isError3} = useTopTracksLong();
  const [trackList, setTrackList] = useState()
  const [tabs, setTabs] = useState("short")

 useEffect(() => {
    if(tabs=="long"){
      setTrackList(tracksLong);
    }else if (tabs=="mid"){
      setTrackList(trackMid);
    }else if (tabs=="short"){
      setTrackList(tracks);
    }else{
      setTrackList(tracks);
    }
 });
 if(isLoadingTracks){
  return <Loading />
} 

  return (
      <>
        <section className='flex flex-col xl:flex-row gap-8 items-center'>
          <div className='text-center lg:text-left'>
              <h1 className='text-5xl'>Top Tracks</h1>
              <p className="text-gray inline-flex gap-2 group">Based on Spotify Activity
              <i className="ri-star-smile-line text-green2"></i>
              </p>
          </div>
          <div className='flex flex-row gap-1 md:gap-4'>
          <a className={(tabs=="long")?"btn bg-white text-black":"btn "} onClick={()=>setTabs("long")}>All Time</a>
          <a className={(tabs=="mid")?"btn bg-white text-black":"btn "} onClick={()=>setTabs("mid")}>Last 6 Months</a>
          <a className={(tabs=="short")?"btn bg-white text-black":"btn "} onClick={()=>setTabs("short")}>Last Month</a>

          </div>
        </section>

      {(trackList.length>0)? 
        <session className="flex flex-col  lg:flex-row lg:gap-16">
          <TopTracks tracks={trackList} type="grid" />
        </session>
        : <p className='text-gray '> Your spotify activity does not have sufficient data !</p>
        }

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