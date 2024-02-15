import { Link } from 'react-router-dom'

const OnBoardingInfo = () => {
    return (
      <>
        <div className='pt-6'>
          <p>EcoPay</p>
        </div>
        <div className='py-2 text-wrap text-2xl'>
          <p>Bienvenido a la primer Green FinTech latinoamericana</p>
        </div>

        <div className='p-[150px]'>
          <p>video o animación</p>
        </div>

        <div className='flex flex-wrap justify-center content-between'>
        <button className='font-bold bg-white text-black py-2 px-10 rounded border-2 border-black shadow'>Iniciar sesión</button>
        <div className='w-2'></div>
        <Link to='/Login' className='font-bold bg-black py-2 px-10 rounded border-2 border-black shadow'> Registrarse</Link>
        </div>
      </>
    )
  }
  
  export default OnBoardingInfo