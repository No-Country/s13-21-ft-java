<<<<<<< HEAD
import { ActionButton } from '../../../components'
import cardImg from '../../../assets/cardImg.png'
import profilePhoto from '../../../assets/Avatar Style 6.jpg'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from 'react-icons/io'

const DepositInfo = () => {
  return (
    <div className='w-[85%] mt-6 flex flex-col justify-center items-center gap-6'>
      <section className='flex gap-2 self-start'>
        <Link to='/DashboardUser'><IoIosArrowRoundBack className='text-[40px]' /></Link>
        <figure>
          <img src={profilePhoto} alt='foto de perfil' />
        </figure>
        <div className='flex justify-center items-end'>
          <p>
            Hola,
            <br />
            Pedrita
          </p>
        </div>
      </section>
      <section className='w-4/5'>
        <div className='flex flex-col pt-4 gap-4'>
          <h2 className='text-lg text-center font-semibold'>Depositar</h2>
          <ActionButton info='Depositar (Cajero Virtual)' option='option2' />
          <ActionButton info='Transferencia' option='option2' />
        </div>
      </section>
      <section className='w-full flex gap-3 items-center  bg-gradient-center from-green-500 to-green-950 rounded-lg py-4 px-2 mt-16 '>
        <img src={cardImg} alt='Imagen tarjeta virtual EcopPay' className='rounded-3xl' />
        <p className='text-white font-medium text-lg '>
          Solicita tu tarjeta Prepaga Virtual sin Costo
        </p>
      </section>
    </div>
  )
}

export default DepositInfo
=======
import { ActionButton } from "../../../components"
import cardImg from '../../../assets/cardImg.png'
import profilePhoto from '../../../assets/Avatar Style 6.jpg'
import { Link } from "react-router-dom"
import { IoIosArrowRoundBack } from "react-icons/io"


const DepositInfo = () => {
    return (
        <div className='w-[85%] mt-6 flex flex-col justify-center items-center gap-6'>
            <section className='flex gap-2 self-start'>
            <Link to='/DashboardUser'><IoIosArrowRoundBack className='text-[40px]' /></Link>
                <figure>
                <img src={profilePhoto} alt='foto de perfil' />
                </figure>
                <div className='flex justify-center items-end'>
                    <p>
                        Hola,
                        <br />
                        Pedrita
                    </p>            
                </div>
            </section>
            <section className='w-4/5'>
                <div className='flex flex-col pt-4 gap-4'>
                    <h2 className='text-lg text-center font-semibold'>Depositar</h2>
                    <ActionButton info='Depositar (Cajero Virtual)' option='option2' />
                    <ActionButton info='Transferencia' option='option2'/> 
                </div>                
            </section>
            <section className='w-full flex gap-3 items-center  bg-gradient-center from-green-500 to-green-950 rounded-lg py-4 px-2 mt-16 '>
                <img src={cardImg} alt='Imagen tarjeta virtual EcopPay' className='rounded-3xl' />
                <p className='text-white font-medium text-lg '>
                Solicita tu tarjeta Prepaga Virtual sin Costo
                </p>
            </section>
        </div>
    )
}
  
export default DepositInfo
>>>>>>> 6bd9ce11d4c43be7734f8632da4808d9901c2ccb
