import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosApps, IoIosCloseCircle, IoLogoLinkedin, IoLogoTwitter, IoLogoFacebook, IoLogoInstagram, IoLogoYoutube} from "react-icons/io";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const OnBoardingInfo = () => {
  const [openNav, setOpenNav] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    )
  }, [])

  const navList = (
    <ul className='mt-2 mb-4 flex flex-col text-center gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <li className='p-1 font-normal'>
        <a href='#' className=''>Servicios</a>
      </li>
      <li className='p-1 font-normal'>
        <a href='#' className=''>Tarjeta</a>
      </li>
      <li className='p-1 font-normal'>
        <a href='#' className=''>Prestamos sustentables</a>
      </li>
    </ul>
  )

  const converted = {
    background: [
      '#33c751',
      '-webkit-linear-gradient(to right, #33c751, #001f04)',
      'linear-gradient(to right, #33c751, #001f04)'
    ],
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent'
  }

  return (
    <div
      className='bg-[#222121] h-full w-full pt-12'
      style={{
        backgroundImage: 'url("/img/Group1x_75.png"), url("/img/Group0x_75.png")',
        backgroundPosition: '0px 0px, -146px -115px',
        backgroundRepeat: 'no-repeat'
      }}
    >

      <header className='sticky top-0 bg-[#1E1E1E99] shadow-md backdrop-blur'>
        <nav className='z-10 h-max max-w-full rounded-none px-8 py-4'>
          <div className='flex items-center justify-between text-blue-gray-900'>
            <Link to='/' className='mr-4 ml-10 cursor-pointer py-1.5 '>
              <img src='/img/Logox2.png' alt='Logo EcoPay' width={200} />
            </Link>
            <div className='flex items-center gap-4'>
              <div className='mr-4 hidden lg:block'>{navList}</div>
              <div className='flex items-center gap-x-2 text-center'>
                <Link to='/Register' className='text-base bg-black py-2 px-8 rounded-lg border-2 border-[#B2FA5B] shadow hidden lg:inline-block'> Registrarse</Link>
                <Link to='/Login' className='text-base bg-transparent py-2 px-8 rounded-lg border-2 border-white shadow hidden lg:inline-block'> Iniciar sesión</Link>
              </div>
              <button
                className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? <IoIosCloseCircle /> : <IoIosApps />}
              </button>
            </div>
          </div>
          <nav className={openNav ? 'flex flex-col items-center' : 'hidden'}>
            {navList}
            <div className='flex items-center gap-x-2 text-center'>
              <Link to='/Register' className='text-sm bg-black py-2 px-8 rounded-lg border-2 border-[#B2FA5B] shadow'> Registrarse</Link>
              <Link to='/Login' className='text-sm bg-transparent py-2 px-8 rounded-lg border-2 border-white shadow'> Iniciar sesión</Link>
            </div>
          </nav>
        </nav>
      </header>

      <main className='w-full flex flex-col justify-center items-center'>

        <div className='pl-[25%] pt-[95px] pb-[200px]'>
          <p className='text-5xl'>La primer</p>
          <p className="py-3 text-8xl bg-gradient-to-r from-[#B2FA5B] to-[#3BC53F] inline-block text-transparent bg-clip-text">Green FinTech </p>
          <p className='text-5xl'>de Latinoamérica</p>
        </div>

        <div className='py-16 pl-16 text-center bg-[#3E3E3Eb8] w-full border-b-2 border-black shadow-inner shadow-md'>
          <p className='text-left text-4xl pb-12'>Servicios Latam</p>
          <div className='w-full flex flex-wrap justify-between'>
            <div className='w-[350px] text-left'>
              <h2 className='text-2xl pb-2'>Envía Dinero</h2>
              <p>Fácil, rápida y segura que te permite enviar dinero a cualquier partedel continente sin importar si tiene o no una cuenta bancaria.</p>
              <h2 className='text-2xl pb-2 pt-8'>Transferencias</h2>
              <p>Realiza transferencias gratis y al instante: a contactos, cuentas bancarias o billeteras virtuales.</p>
              <h2 className='text-2xl pb-2 pt-8'>Extracciones</h2>
              <p>Sacá dinero con tu celular, con QR en comercios adheridos y con tu tarjeta prepaga en todos los cajeros del país.</p>
              <h2 className='text-2xl pb-2 pt-8'>Cambio de Divisas</h2>
              <p>"Viaja sin fronteras: cambia divisas al instante”</p>
            </div>
            <img src='/img/Group2.png' alt='Lugares de Latinoamérica' className='w-2/3' />
          </div>
        </div>

        <div className='p-[100px] w-full text-right border-b-2 border-black shadow-inner shadow-md flex flex-wrap justify-evenly'>
          <div className='w-2/5 flex flex-col justify-around items-end'>
            <p className='text-4xl'>Solicita tu tarjeta Prepaga Virtual sin Costo y sin Burocracias</p>
            <img src='/img/Top Estate Agent.png' alt='Usuarios EcoPay' className='w-[280px]' />
          </div>
          <img src='/img/Card.png' alt='Targeta EcoPay' />
        </div>

        <div className='p-[60px] w-full border-b-2 border-black shadow-inner shadow-md flex flex-wrap justify-evenly'>
          <div className='w-2/5 flex flex-col justify-around items-end text-right'>
            <img src='/img/Blog.png' alt='Usuarios EcoPay' className='w-[100px] pb-3' />
            <img src='/img/Blog2.png' alt='Usuarios EcoPay' className='w-[260px]' />
          </div>
          <div className='w-2/5 flex flex-col justify-around items-start text-left'>
            <img src='/img/Blog3.png' alt='Usuarios EcoPay' className='w-[300px]' />
            <p className='text-4xl w-[250px]'>Prestamos para emprendimientos sustentables</p>
          </div>
        </div>

      </main>

      <footer className="w-full flex flex-col items-center bg-black">

        <div className='flex flex-col justify-evenly items-center p-4 w-[400px] '>
          <p>Descargate la última versión de la app</p>
          <div className="flex flex-wrap justify-between items-center ">
            <div className="p-2"><Link to='/' className='text-base bg-transparent py-2 px-6 rounded-lg border-2 border-white shadow flex items-center'><FaGooglePlay className="inline-block w-[25px] h-[25px] pr-2" /> Google Play</Link></div>
            <div className="p-2"><Link to='/' className='text-base bg-[#1B1B1B9C] py-2 px-6 rounded-lg border-2 border-white shadow flex items-center'><FaApple className="inline-block w-[25px] h-[25px] pr-2" /> App Store</Link></div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center"
        style={{backgroundImage: `url("/img/GroupFooter.png")`,
        backgroundPosition: 'right 0px',
        backgroundRepeat: 'no-repeat'}}>
        <div className="flex flex-wrap justify-around w-full bg-[#3E3E3Eb8] shadow-inner shadow-md">

          <div className="flex flex-col justify-between items-center py-6">
            <div className="flex flex-wrap justify-between">

              <div className="flex flex-col px-6 justify-center items-start">
                <p className="p-2"><Link to='/UsersDataForm' >UsersDataForm</Link></p>
                <p className="p-2"><Link to='/Login' >Login</Link></p>
                <p className="p-2"><Link to='/Register' >Register</Link></p>
                <p className="p-2"><Link to='/ForgotPassword' >ForgotPassword</Link></p>
              </div>
              <div className="flex flex-col px-6 justify-center items-start">
                <p className="p-2"><Link to='/DashboardUser' >DashboardUser</Link></p>
                <p className="p-2"><Link to='/Deposit' >Deposit</Link></p>
                <p className="p-2"><Link to='/Extract' >Extract</Link></p>
                <p className="p-2"><Link to='/VirtualCashier' >VirtualCashier</Link></p>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center w-[400px] pt-4">
              <p>Contacto</p>
              <div className="flex flex-wrap justify-around w-[80%] py-4">
                <IoLogoLinkedin className="w-[30px] h-[30px]" />
                <IoLogoTwitter className="w-[30px] h-[30px]" />
                <IoLogoFacebook className="w-[30px] h-[30px]" />
                <IoLogoInstagram className="w-[30px] h-[30px]" />
                <IoLogoYoutube className="w-[30px] h-[30px]" />
              </div>
              <p>Location: Latam</p>
            </div>
          </div>

          <div className="flex flex-col my-6 pl-6 border-l justify-center items-start">
            <p className="p-2"><Link to='/' >Paga con código QR</Link></p>
            <p className="p-2"><Link to='/' >Recarga tu celular</Link></p>
            <p className="p-2"><Link to='/' >Paga tus servicios</Link></p>
            <p className="p-2"><Link to='/' >Envia y pide dinero</Link></p>
            <p className="p-2"><Link to='/' >Accede a un crédito</Link></p>
            <p className="p-2"><Link to='/' >Pide delivery de comida</Link></p>
          </div>
        </div>

        <div className="p-4">
          <p>* Copyright © 2023-2024 Grupo Java. Todos los derechos reservados. EcoPay .   Hecho en Argentina whit love jajajaja.</p>
        </div>

        </div>

     </footer>

    </div>
  )
}

export default OnBoardingInfo
