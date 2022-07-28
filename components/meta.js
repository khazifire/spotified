import Head from "next/head"

const Meta = () => {
    return ( 
            <Head>
                <title>Spotified - Spotify Analyzed</title>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name='robots' content='index' />
                <link rel="icon" href="/favicon.png" />
   
                <meta name="title" content="Spotified - Spotify Analyzed"/>
                <meta name="description" content="a web-based application that uses Nextjs and the Spotify API to visualize users top tracks, playlists and other analysis."/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://spotified.vercel.app/"/>
                <meta property="og:title" content="Spotified - Spotify Analyzed"/>
                <meta property="og:description" content="a web-based application that uses Nextjs and the Spotify API to visualize users top tracks, playlists and other analysis."/>
                <meta property="og:image" content="/cover.png"/>

            
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://spotified.vercel.app/"/>
                <meta property="twitter:title" content="Spotified - Spotify Analyzed"/>
                <meta property="twitter:description" content="a web-based application that uses Nextjs and the Spotify API to visualize users top tracks, playlists and other analysis."/>
                <meta property="twitter:image" content="/cover.png"/>

            </Head>

     );
}
 
export default Meta;