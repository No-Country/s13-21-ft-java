import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import userImg from '../../../assets/Avatar Style 6.jpg'

export default function HistoryDetailsInfo () {
  return (
    <div className='flex flex-col px-8'>
      <div className='flex items-center gap-3'>
        <Link to='/MovementsHistory' className='mt-[-30px]'> <FaArrowLeft /></Link>
        <h1 className='font-bold text-2xl'>
          Detalles del
          <br />
          movimiento
        </h1>
      </div>
      <h2 className='pt-6 font-medium text-xs self-center'>Código transferencia: EPU000D00M00A0000T0000</h2>
      <div className='flex flex-col px-8'>
        <div className='shadow-inner rounded-2xl mt-6 p-6 bg-zinc-100 flex flex-col items-center border-2'>
          <h2 className='font-medium pb-3'>Transferencia exitosa</h2>
          <hr className='border-1 w-[300px]' />
          <p className='pt-3'>Destinatario</p>
          <div className='flex items-center gap-3 p-3'>
            <img src={userImg} alt='user image' className='rounded-3xl' />
            <p className='font-medium'>Carla Coe</p>
          </div>
          <hr className='border-1 w-[300px]' />
          <div />
          <p className='font-bold text-3xl py-4'>$0.000.000.00</p>
          <hr className=' pt-3 border-1 w-[300px]' />
          <p>el 00-00-0000 a las 00:00 Hs.</p>
        </div>
      </div>
      <p className='font-medium text-sm text-center mt-4'>Descarga de comprobante</p>
    </div>
  )
}
