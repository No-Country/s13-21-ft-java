import { Link } from 'react-router-dom'
import profilePhoto from '../../assets/Avatar Style 6.jpg'
import cardImg from '../../assets/cardImg.png'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { ActionButton, RoundButton } from '../index'

const DashboarDesktop = () => {
  return (
    <div className='hidden w-[85%] h-[90%] xl:flex flex-col  items-center'>
      <div className='border rounded-xl px-5 py-11 bg-DashboardDesktop shadow-md outline-1 border-neutral-700 w-full'>
        <section className='flex gap-2 self-start'>
          <figure>
            <img src={profilePhoto} alt='foto de perfil' className='xl:rounded-3xl' />
          </figure>
          <div className='flex justify-center items-end'>
            <p>
              Hola,
              <br />
              <Link to='/UsersDataForm'>Pedrita</Link>
            </p>
            <Link to='/UsersDataForm'>
              <IoIosArrowRoundForward className='text-[40px]' />
            </Link>
          </div>
        </section>
        <section className='flex xl:flex-col gap-6'>
          <div className='flex flex-col justify-evenly items-center'>
            <p className='w-full font-medium'>Disponible</p>
            <p className='w-full text-2xl font-medium'>$ 0.000.000,00</p>
          </div>
          <div className='flex flex-col xl:flex-row xl:justify-evenly pt-4 xl:pt-2 gap-4'>
            <ActionButton info='Depositar' option='option1' link='//Deposit' />
            <ActionButton info='Transferir' option='option2' link='/Transfer' />
            <ActionButton info='Extraer' option='option3' link='/Extract' />
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
