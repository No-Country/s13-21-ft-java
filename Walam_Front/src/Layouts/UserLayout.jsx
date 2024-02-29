import { Link, Outlet } from 'react-router-dom'
import { FaCircleQuestion } from 'react-icons/fa6'
import { FaBell } from 'react-icons/fa'
import { Footer, NavBar, DashboardDesktop } from '../components'

import '../index.css'

const UserLayout = () => {
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
      <header>
        <div className='w-full xl:hidden'>
          <NavBar />
        </div>        
      </header>
      <main className='flex flex-col gap-4 items-center justify-center xl:bg-dashboard-bg xl:bg-cover xl:bg-center xl:bg-no-repeat xl:h-screen'>
        <div className='w-full hidden xl:flex bg-transparent pl-12'>
          <Link to='/'><img src='/img/Logox2.png' alt='Logo EcoPay' className='w-[200px] p-4'/></Link>
        </div>
        <div className='flex items-center justify-center '>
          <div className='hidden xl:flex'>
            <NavBar />
          </div>
          <div className='flex p-6 flex-col xl:border xl:rounded-xl xl:text-white border-neutral-700 xl:h-[720px] xl:gap-4'>
            <div className='hidden xl:flex xl:justify-end gap-3'>
              <FaBell />
              <div className='flex gap-1'>
                <FaCircleQuestion />
                <p className='mt-[-5px]'>Ayuda</p>
              </div>
            </div>
            <div className='flex xl:gap-4'>
              <DashboardDesktop />
              <Outlet />
            </div>
          </div>
        </div>
      </main>
      <footer className='hidden'>
        <Footer />
      </footer>
    </div>
  )
}

export default UserLayout
