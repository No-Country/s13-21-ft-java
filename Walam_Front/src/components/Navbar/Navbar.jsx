import { useState } from 'react'
import { Link } from 'react-router-dom'
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
    <nav className='pt-4 w-screen flex justify-between px-8'>
      <div className='flex items-center gap-2'>
        <FaCircleQuestion />
        <p>Ayuda</p>
      </div>
      <div className='flex items-center gap-4'>
        <FaMoon className='text-zinc-500' />
        <button onClick={toggleNotices} className='md:hidden'>
          <FaBell className='text-zinc-500' />
        </button>
        {isOpenNotes && (
          <div className='md:hidden absolute top-10 right-0 bg-white border p-4'>
            <p>No hay nuevos avisos</p>
          </div>
        )}
        <button onClick={toggleMenu} className='md:hidden'>
          <MdMenu className='text-[24px]' />
        </button>
        {isOpen && (
          <div className='md:hidden absolute top-10 right-0 bg-white border'>
            {/* Contenido del menú */}
            <ul className='mt-2'>
              <li className='mb-1'>
                <Link to='/DashboardUser' className='block px-4 py-2 text-sm'>Inicio</Link>
              </li>
              <li className='mb-1'>
                <Link to='/UsersDataForm' className='block px-4 py-2 text-sm'>
                  Perfil de usuario
                </Link>
              </li>
              <li className='mb-1'>
                <Link to='#' className='block px-4 py-2 text-sm'>
                  Historial de movimientos
                </Link>
              </li>
              <li className='mb-1'>
                <Link to='#' className='block px-4 py-2 text-sm'>Servicios</Link>
              </li>
              <li className='mb-1'>
                <Link to='#' className='block px-4 py-2 text-sm'>Recargas</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
