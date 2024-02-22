import { Link } from 'react-router-dom'
import profilePhoto from '../../../assets/Avatar Style 6.jpg'
import circle from '../../../assets/greenCircle.png'
import cardImg from '../../../assets/cardImg.png'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { ActionButton, RoundButton } from '../../../components'

const DashboardUserInfo = () => {
  return (
    <div className='w-[85%] mt-6 flex flex-col justify-center items-center'>
      <section className='flex gap-2 self-start'>
        <figure>
          <img src={profilePhoto} alt='foto de perfil' />
        </figure>
        <div className='flex justify-center items-end'>
          <p>
            Hola,
            <br />
            <Link to='/Users'>Pedrita</Link>
          </p>
          <IoIosArrowRoundForward className='text-[40px]' />
        </div>
      </section>
      <section className='flex gap-6'>
        <div className='flex flex-col justify-evenly items-center'>
          <p className='w-full font-medium'>Disponible</p>
          <p className='w-full text-2xl font-medium'>$ 0.000.000,00</p>
          <p className='w-full text-green-700 font-medium text-center'>Historial de Movimientos</p>
        </div>
        <div className='flex flex-col pt-4 gap-4'>
          <ActionButton info='Depositar' option='option1' />
          <ActionButton info='Transferir' option='option2' />
          <ActionButton info='Extraer' option='option3' />
        </div>
      </section>
      <section className='w-full flex gap-3 items-center  bg-gradient-center from-green-500 to-green-950 rounded-lg py-4 px-2 mt-6 '>
        <img src={cardImg} alt='Imagen tarjeta virtual EcopPay' className='rounded-3xl' />
        <p className='text-white font-medium text-lg '>
          Solicita tu tarjeta Prepaga Virtual sin Costo
        </p>
      </section>
      <section className=' w-full mt-8 flex justify-evenly  '>
        <RoundButton info='Recargas' option='option1' />
        <RoundButton info='QR' option='option2' />
        <RoundButton info='CVU' option='option3' />
        <RoundButton info='Divisas' option='option4' />
        <RoundButton info='Ver más' option='option5' />
      </section>
      <section className='w-full mt-8 '>
        <button className='border w-full bg-zinc-700 flex justify-center items-center rounded-lg'>
          <p className='text-white'>Iniciativa</p>
          <img src={circle} alt='círculo verde' />
          <p className='text-white'>Ecopay</p>
        </button>
      </section>
    </div>
  )
}

export default DashboardUserInfo
