import {signIn} from 'next-auth/react';
import SpotifiedLogo from './icons/Spotified'
const Login = () => {
    return ( 

        <section className='flex justify-center items-center h-screen'>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-row gap-2 justify-center'>
                    <SpotifiedLogo />
                    <h1 className='font-semibold text-xl'>Spotified</h1>
                </div>
                <button className="bg-green p-2 rounded-full px-4 font-medium text-lg" onClick={() => signIn()}>LOG IN TO SPOTIFY</button>
               
            </div>
        </section>
     );
}
 
export default Login;