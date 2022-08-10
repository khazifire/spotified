import {getSession} from 'next-auth/react';
import {useEffect, useState} from 'react';
import TopArtists from '../components/TopArtists';
import {useTopArtists,useTopArtistssMid,useTopArtistsLong } from '../lib/fetcher'
import Loading from '../components/Loading'

export default function TopArtistsPage() {
 
  const {artists,isLoadingArtists,isErrorTracks} = useTopArtists();
  const {artistsMid,isLoadingArtistsMid,isError2} = useTopArtistssMid();
  const {artistsLong,isLoadingArtistsLong,isError3} = useTopArtistsLong();
  const [ArtistList, setArtistList] = useState()
  const [tabs, setTabs] = useState("short")


  useEffect(() => {
      if(tabs=="long"){
        setArtistList(artistsLong);
      }else if (tabs=="mid"){
        setArtistList(artistsMid);
      }else if (tabs=="short"){
        setArtistList(artists);
      }else{
        setArtistList(artists);
      }
  },);
 
  if(isLoadingArtists){
    return <Loading />
  } 

  return (
      <>
            <section className='flex flex-col xl:flex-row gap-8 items-center'>
              <div className='text-center lg:text-left'>
                  <h1 className='text-5xl'>Top Artists</h1>
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
            <hr className='my-8'></hr>
            {(ArtistList && ArtistList.length != 0) ? 
              <session className="flex flex-col  lg:flex-row lg:gap-16">
                <TopArtists artists={ArtistList} type="grid" />
              </session>
            :<p className='text-gray '> Your spotify activity does not have sufficient data !</p>}

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