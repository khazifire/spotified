import { useEffect } from 'react';
import { useRouter } from 'next/router';
const PageNotFound = () => {
    const router = useRouter()
    useEffect(() =>{
        setTimeout(()=>{
        router.push('/');
        },3000)
    }, []) 
    return ( 
        <div className="md:mb-24 py-24 px-16  lg:w-3/4 mx-auto">
            <span className='text-5xl md:text-7xl'>Oooops...</span>
            <h1 className='text-3xl md:text-6xl'>It seems you got lost <span className='text-3xl md:text-4xl'>&#x1F622;</span></h1>
            <p className='text-green font-semibold mt-8'>Fret not, we got you! </p>
        </div>
     );
}
 
export default PageNotFound;