import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

export default function CVUUserInfo () {
  return (
    <div className='flex flex-col px-8'>
      <div className='flex items-center gap-3'>
        <Link to='/DashboardUser' className='mt-[-30px]'> <FaArrowLeft /></Link>
        <h1 className='font-bold text-2xl'>
          CVU y Alias
          <br />
          de Usuario
        </h1>
      </div>
      <div className='flex flex-col px-8 '>
        <div className='shadow-inner rounded-2xl mt-6 p-6 flex flex-col items-center border-2 xl:border xl:rounded-xl bg-zinc-800 xl:shadow-md xl:outline-1 xl:border-neutral-700 '>
          <h2 className='font-bold pb-3 text-xl'>CVU</h2>
          <hr className='border-1 w-[300px]' />
          <p className='py-3'>123456789101</p>
          <hr className='border-1 w-[300px]' />
          <div />
          <h2 className='font-bold pb-3 pt-4 text-xl'>Alias</h2>
          <hr className=' pt-3 border-1 w-[300px]' />
          <p>pedrit@478</p>
        </div>
      </div>
    </div>
  )
}
