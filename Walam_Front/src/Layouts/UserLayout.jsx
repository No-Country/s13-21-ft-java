import { Outlet } from 'react-router-dom'
import { Footer, NavBar } from '../components'

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
        <div className='w-[100%]'>
          <NavBar />
        </div>
      </header>
      <main className='row-start-2'>
        <Outlet />
      </main>
<<<<<<< HEAD
      <footer>
=======
      <footer className='hidden'>
>>>>>>> 6bd9ce11d4c43be7734f8632da4808d9901c2ccb
        <Footer />
      </footer>
    </div>
  )
}

export default UserLayout
