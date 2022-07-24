import {SessionProvider} from 'next-auth/react';
import '../styles/globals.css'
import 'remixicon/fonts/remixicon.css'
import Layout from '../components/Layout';

function MyApp({ Component, pageProps: {session, ...pageProps}}) {
  return (
    <SessionProvider session={session}>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default MyApp
