import SideBar from "./SideBar";
import {useSession, signIn, signOut} from 'next-auth/react';
import Meta from "./meta";
const Layout = ({children}) => {
    const {data: session} = useSession();

    
    if (!session) {
        return (
            <>
                <Meta />
                <section>
                    {children}
                </section>
            </>
        )
    }
    return ( 
        <>
            <Meta />
            <main className='flex flex-row gap-16'>
                <SideBar />
                <div className='ml-24 lg:ml-80 py-8'>
                    {children}
                </div>
            </main>
        </>
     );
}
 
export default Layout;