import { Outlet, useLocation } from 'react-router-dom'
import { Footer, NavBar } from '../components'

import '../index.css'

const MainLayout = () => {
  const location = useLocation()
  const showNavbarMobileRoutes = ['/Users', '/Dashboarduser']
  const showNavbarMobile = showNavbarMobileRoutes.includes(location.pathname)

  return (
    <div className='
    w-full
    h-full
    justify-self-center
    items-center
    grid-cols-1
    grid-rows-[1fr,auto,1fr]
    lg:grid-rows-[1r,auto,1fr]'
    >
      <header className='w-[100%]'>
        {/* <div className='hidden md:block'>
          <NavBar />
        </div> */}
        <div className='md:hidden'>
          {showNavbarMobile && <NavBar />}
        </div>
      </header>
      <main className='row-start-2'>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default MainLayout
