import Head from "next/head"
import coverImg from '../public/cover.png'

const Meta = ({title="Profile Analytics"}) => {
    return ( 
            <Head>
                <title>Spotified - Profile Analytics</title>
                <meta name="title" content={`Spotified - ${title}`}/>
                <meta name="description" content="a web-based application that uses Nextjs and the Spotify API to visualize users top tracks, playlists and other analysis."/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://spotified.vercel.app/"/>
                <meta property="og:title" content={`Spotified - ${title}`}/>
                <meta property="og:description" content="a web-based application that uses Nextjs and the Spotify API to visualize users top tracks, playlists and other analysis."/>
                <meta property="og:image" content={coverImg}/>

            
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://spotified.vercel.app/"/>
                <meta property="twitter:title" content={`Spotified - ${title}`}/>
                <meta property="twitter:description" content="a web-based application that uses Nextjs and the Spotify API to visualize users top tracks, playlists and other analysis."/>
                <meta property="twitter:image" content={coverImg}/>

            </Head>

     );
}
 
export default Meta;