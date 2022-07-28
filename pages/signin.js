import { useSession, getProviders, signIn,getSession } from "next-auth/react"
import SpotifiedLogo from '../components/icons/Spotified'


export default function SignIn({ providers }) {
  const {data: session} = useSession();


  return (
    <>
      
      <section className='flex justify-center items-center h-screen'>
            <div className='flex flex-col items-center gap-8'>
                <div className='flex flex-row gap-2 justify-center items-center'>
                    <SpotifiedLogo />
                    <h1 className='font-semibold text-5xl'>Spotified</h1>
                </div>

                {Object.values(providers).map((provider) => (
                    <div key={provider.name}>
                    <button onClick={() => signIn(provider.id)} className="hover:bg-green2  text-black bg-green p-2 rounded-full px-6 font-medium text-lg">LOG IN WITH SPOTIFY</button>
                    </div>
                ))}
               
            </div>
        </section>
    </>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  const session = await getSession(context);

  if(session)
    return{
      redirect:{
        destination: '/',
        permanent: false,
      }
    };
  return {
    props: { providers },
  }
}

