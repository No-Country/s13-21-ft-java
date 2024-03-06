import { Link } from 'react-router-dom'
import circle from '../../../assets/greenCircle.png'
import cardImg from '../../../assets/cardImg.png'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { ActionButton, RoundButton } from '../../../components'
import { MovementsHistory } from '../../index.js'
import { FaUserCircle } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import axios from 'axios'
import useBalance from '../../../components/CustomHooks/CustonHooks'

const DashboardUserInfo = () => {
  const [userName, setUserName] = useState()
  const { balance } = useBalance()
  const [displayedBalance, setDisplayedBalance] = useState(balance)

  useEffect(() => {
    setDisplayedBalance(balance)
  }, [])

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = window.localStorage.getItem('token')
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const response = await axios.get('https://s13-21-ft-java.onrender.com/api/v1/users')
        setUserName(response.data.username)
        console.log(response.data)
      } catch (error) {
        console.error('Error al guardar usuario:', error)
      }
    }

    fetchUser()
  }, [])
  return (
    <>
      <div className='w-[85%] xl:w-0 xl:mt-6 flex flex-col justify-center items-center xl:hidden'>
        <section className='flex gap-2 self-start'>
          <FaUserCircle className='text-4xl' />
          <div className='flex justify-center items-end'>
            <p>
              Hola,
              <br />
              <Link to='/UsersDataForm'>{userName}</Link>
            </p>
            <Link to='/UsersDataForm'>
              <IoIosArrowRoundForward className='text-[40px]' />
            </Link>
          </div>
        </section>
        <section className='flex gap-6'>
          <div className='flex flex-col justify-evenly items-center'>
            <p className='w-full font-medium'>Disponible</p>
            <p className='w-full text-2xl font-medium'>{displayedBalance}</p>
            <Link to='/MovementsHistory'><p className='w-full text-green-700 font-medium text-center'>Historial de Movimientos</p></Link>
          </div>
          <div className='flex flex-col pt-4 gap-4'>
            <ActionButton info='Depositar' option='option1' link='/VirtualCashier' />
            <ActionButton info='Transferir' option='option2' link='/Transfer' />
            <ActionButton info='Extraer' option='option3' link='/VirtualCashier' />
          </div>
        </section>
        <section className='w-full flex gap-3 items-center  bg-gradient-center from-green-500 to-green-950 rounded-lg py-4 px-2 mt-6 '>
          <img src={cardImg} alt='Imagen tarjeta virtual EcopPay' className='rounded-3xl' />
          <p className='text-white font-medium text-lg '>
            Solicitá tu tarjeta Prepaga Virtual sin Costo
          </p>
        </section>
        <section className=' w-full mt-8 flex justify-evenly  '>
          <RoundButton info='Recargas' option='option1' />
          <RoundButton info='QR' option='option2' />
          <Link to='/CVUUser'>
            <RoundButton info='CVU' option='option3' />
          </Link>
          <Link to='/ForeignExchange'>
            <RoundButton info='Divisas' option='option4' />
          </Link>
          <RoundButton info='Ver más' option='option5' />
        </section>
        <section className='w-full mt-8 '>
          <button className='border w-full bg-zinc-700 flex justify-center items-center rounded-lg py-3 gap-3'>
            <p className='text-white'>Iniciativa</p>
            <img src={circle} alt='círculo verde' />
            <p className='text-green-500 font-bold'>ECOPAY</p>
          </button>
        </section>
      </div>
      <div className='hidden xl:w-[68.8%] xl:flex'>
        <MovementsHistory />
      </div>
    </>
  )
}

export default DashboardUserInfo
