import { Link } from 'react-router-dom'
import cardImg from '../../assets/cardImg.png'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { ActionButton, RoundButton } from '../index'
import { FaUserCircle } from 'react-icons/fa'
import axios from 'axios'
import { useState, useEffect } from 'react'

const DashboarDesktop = () => {
  const [userName, setUserName] = useState()
  const [balance, setBalance] = useState()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = window.localStorage.getItem('token')
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const response = await axios.get('https://s13-21-ft-java.onrender.com/api/v1/users')
        setUserName(response.data.username)
        setBalance(response.data.account.balance)
        console.log(response.data)
      } catch (error) {
        console.error('Error al guardar usuario:', error)
      }
    }

    fetchUser()
  }, [])
  return (
    <div className='hidden w-[500px] h-[90%] xl:flex flex-col  items-center'>
      <div className='border rounded-xl px-5 py-10 bg-DashboardDesktop shadow-md outline-1 border-neutral-700 w-full '>
        <section className='flex gap-6 self-center'>
          <FaUserCircle className='text-4xl' />
          <div className='flex justify-between items-center gap-3 w-full'>
            <p className='text-2xl'>
              Hola,
              <Link to='/UsersDataForm'> {userName}</Link>
            </p>
            <Link className='self-end' to='/UsersDataForm'>
              <IoIosArrowRoundForward className='text-[40px]' />
            </Link>
          </div>
        </section>
        <section className='flex xl:flex-col gap-6'>
          <div className='flex flex-col justify-evenly items-center'>
            <p className='w-full font-medium pt-2'>Disponible</p>
            <p className='w-full text-2xl font-medium'><span>$</span>{balance}<span>,00</span></p>
          </div>
          <div className='flex flex-col xl:flex-row xl:justify-evenly pt-4 xl:pt-2 gap-4'>
            <ActionButton info='Depositar' option='option1' link='/VirtualCashier?action=deposit' />
            <ActionButton info='Transferir' option='option2' link='/Transfer' />
            <ActionButton info='Extraer' option='option3' link='/VirtualCashier?action=withdraw' />
          </div>
        </section>
      </div>
      <section className='w-full flex gap-3 items-center py-4 px-2 mt-6 border rounded-xl p-5 bg-DashboardDesktop shadow-md outline-1 border-neutral-700'>
        <img src={cardImg} alt='Imagen tarjeta virtual EcopPay' className='rounded-3xl w-[240px] h-[120px] order-1' />
        <div className='flex flex-col items-end py-3'>
          <p className='text-white font-sm text-lg pl-4 text-right '>
            Solicita tu tarjeta Prepaga Virtual sin Costo y sin Burocracias
          </p>
          <img src='/img/Top Estate Agent.png' alt='Usuarios EcoPay' className='w-[160px]' />
        </div>
      </section>
      <section className=' w-full mt-8 flex justify-evenly border rounded-xl px-5 py-6 bg-DashboardDesktop shadow-md outline-1 border-neutral-700'>
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
    </div>
  )
}

export default DashboarDesktop
