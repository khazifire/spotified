import SideBar from "./SideBar";

const Layout = ({children}) => {
    return ( 
        <section className='flex flex-row gap-16'>
            <SideBar />
            <div className='ml-24 md:ml-32 lg:ml-80 py-8'>
            {children}
            </div>

      </section>
     );
}
 
export default Layout;