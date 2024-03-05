import { Link, useParams } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import userImg from '../../../assets/Avatar Style 6.jpg'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function HistoryDetailsInfo ({ transactions }) {
  const { id } = useParams()
  const [transaction, setTransaction] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Realizar la petición para obtener la información de la transacción
        const response = await axios.get(`https://s13-21-ft-java.onrender.com/api/v1/user/${id}`)
        setTransaction(response)
        console.log(response)
      } catch (error) {
        console.error('Error al obtener la información:', error)
      }
    }

    fetchData()
  }, [id])

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
        <div className='shadow-inner rounded-2xl mt-6 p-6 flex flex-col items-center border-2  xl:border xl:rounded-xl bg-zinc-800 xl:shadow-md outline-1 border-neutral-700'>
          <h2 className='font-medium pb-3'>Transferencia exitosa</h2>
          <hr className='border-1 w-[300px]' />
          <p className='pt-3'>Destinatario</p>
          <div className='flex items-center gap-3 p-3'>
            <img src={userImg} alt='user image' className='rounded-3xl' />
            <p className='font-medium'>{transaction.data}</p>
          </div>
          <hr className='border-1 w-[300px]' />
          <div />
          <p className='font-bold text-3xl py-4'>{transaction.amount}</p>
          <hr className=' pt-3 border-1 w-[300px]' />
          <p>el {new Date(transaction.date).toLocaleDateString()} a las {new Date(transaction.date).toLocaleTimeString()} Hs.</p>
        </div>
      </div>
      <p className='font-medium text-sm text-center mt-4'>Descarga de comprobante</p>
    </div>
  )
}
