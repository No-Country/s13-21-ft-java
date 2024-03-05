import { useState } from 'react'
import LinkMenu from './LinkMenu'
import { FaCircleQuestion } from 'react-icons/fa6'
import { FaMoon, FaBell } from 'react-icons/fa'
import { MdMenu } from 'react-icons/md'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenNotes, setIsOpenNotes] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    isOpenNotes ? setIsOpenNotes(false) : setIsOpenNotes(isOpenNotes)
  }

  const toggleNotices = () => {
    setIsOpenNotes(!isOpenNotes)
    isOpen ? setIsOpen(false) : setIsOpen(isOpen)
  }

  return (
    <nav className='pt-4 xl:pt-0 w-screen xl:w-full flex justify-between px-8'>
      <div className='flex items-center gap-2 xl:hidden'>
        <FaCircleQuestion />
        <p>Ayuda</p>
      </div>
      <div className='flex items-center gap-4'>
        <FaMoon className='text-zinc-500 xl:hidden' />
        <button onClick={toggleNotices} className='xl:hidden'>
          <FaBell className='text-zinc-500' />
        </button>
        {isOpenNotes && (
          <div className=' absolute top-10 right-0 bg-white border p-2'>
            <p className='block px-4 py-2 text-sm'>No hay nuevos avisos</p>
          </div>
        )}
        <button onClick={toggleMenu} className='xl:hidden'>
          <MdMenu className='text-[24px]' />
        </button>
        {isOpen && (
          <div className='absolute top-10 right-0 bg-white border'>
            {/* menu mobile */}
            <LinkMenu />
          </div>
        )}
        <div className='hidden xl:flex xl:border xl:rounded-xl text-white border-neutral-700 h-[720px] justify-start'>
          {/* menu desktop */}
          <LinkMenu />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
