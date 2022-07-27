import SideBar from "./SideBar";
import {useSession, signIn, signOut} from 'next-auth/react';
const Layout = ({children}) => {
    const {data: session} = useSession();

    
    if (!session) {
        return (
            <section>
            {children}
            </section>
        )
    }
    return ( 
        <section className='flex flex-row gap-16'>
            <SideBar />
            <div className='ml-16 md:ml-24 lg:ml-80 py-8'>
            {children}
            </div>

      </section>
     );
}
 
export default Layout;