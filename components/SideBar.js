import {useSession, signIn, signOut} from 'next-auth/react';

const SideBar = () => {
    const {data: session} = useSession();
    const navs = [
        {
          'name':'Profile',
          'path':'#',
          'icon':'ri-user-smile-line'
        },
        {
          'name':'Top Tracks',
          'path':'#',
          'icon':'ri-disc-line'
        },
        {
          'name':'Top Genre',
          'path':'#',
          'icon':'ri-music-line'
        },
        {
          'name':'Top Artists',
          'path':'#',
          'icon':'ri-mic-2-line'
        },
        {
          'name':'Recent',
          'path':'#',
          'icon':'ri-history-line'
        },
        {
          'name':'Playlists',
          'path':'#',
          'icon':'ri-play-list-line'
        },
       
      ]
    return ( 
        <div className="flex flex-col w-16 lg:w-64 h-screen px-4 py-8 border-r fixed">
            <div className="inline-flex gap-2 items-center">
            <i class="ri-blaze-fill text-3xl "></i>
            <h2 className="hidden lg:block font-semibold text-gray-800 dark:text-white text-2xl">SPOTIFIED</h2>
            </div>
          <div className="flex flex-col justify-between flex-1 mt-6">
              <nav>
                {navs.map(({name,path,icon}) =>(
                  <a href={path} key={name} className="flex lg:items-center flex-col lg:flex-row px-1 lg:px-4 py-2 rounded-md group hover:bg-gray hover:bg-opacity-10 border-l-4 border-transparent hover:border-green" >
                    <i className={icon}></i>
                    <span className="hidden lg:block lg:mx-4 font-medium">{name}</span>
                  </a>
                ))}

                  <hr className="my-6 border-white" />
                  <a onClick={() => signOut()} className="flex items-center px-1 lg:px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md group hover:bg-white" href="#">
                      <i className="ri-logout-circle-r-line group-hover:text-black transition-colors duration-200"></i>
                      <span className="hidden lg:block mx-4 font-medium group-hover:text-black transition-colors duration-200">Logout</span>
                  </a>
              </nav>
            
              <div className="flex items-center px-1 lg:px-4 -mx-2">
                  <img className="object-cover lg:mx-2 rounded-full h-9 w-9" src={session?.token?.picture} alt="avatar"/>
                  <h4 className="hidden lg:block mx-2 font-medium">{session?.token?.name}</h4>
              </div>
          </div>
        </div>
     );
}
 
export default SideBar;