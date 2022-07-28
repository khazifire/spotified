import { useSession, getProviders, signIn,getSession } from "next-auth/react"
import SpotifiedLogo from '../components/icons/Spotified'


export default function SignIn({ providers }) {
  const {data: session} = useSession();


  return (
    <>
      
      <section className='flex justify-center items-center h-screen'>
            <div className='flex flex-col md:flex-row items-center gap-2 md:gap-8'>
                <div className='flex flex-row items-center'>
                  <i className="ri-blaze-fill text-7xl "></i>
                  <h1 className='font-semibold text-5xl hidden'>Spotified</h1>
                </div>
                {Object.values(providers).map((provider) => (
                <div key={provider.name} className="">
                    <button onClick={() => signIn(provider.id)} className="hover:bg-green2  text-black bg-black p-2 rounded-full px-6 font-medium text-sm">LOG IN WITH SPOTIFY</button>
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

