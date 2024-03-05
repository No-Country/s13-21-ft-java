import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { HistoryItem } from '../../../components'

const MovementsHistoryInfo = () => {
  return (
    <div className='w-full px-8 flex flex-col items-cente'>
      <div className='flex items-center gap-3 self-start py-8 '>
        <Link to='/DashBoardUser'> <FaArrowLeft /></Link>
        <h1 className='font-bold text-2xl'>
          Historial de
          movimientos
        </h1>
      </div>
      <section className='flex flex-col w-full items-center justify-center'>
        <input type='search' name='' id='' placeholder='Buscar' className=' shadow appearance-none border rounded w-full xl:bg-transparent py-2 px-3 leading-tight text-[0.8rem] lg:text-[1rem] focus:outline-none mb-6  xl:border xl:rounded-xl bg-zinc-800 xl:shadow-md xl:outline-1 xl:border-neutral-700 text-white' />
        <p className='font-bold w-full shadow-inner rounded-lg flex flex-col pl-4 border-2 xl:border xl:rounded-xl bg-zinc-800 xl:shadow-md xl:outline-1 xl:border-neutral-700 '>
          Hoy
        </p>
        <div className='w-full'>
          <HistoryItem name='Pago' total='-$ 1500.00' />
        </div>
      </section>
    </div>
  )
}

export default MovementsHistoryInfo
