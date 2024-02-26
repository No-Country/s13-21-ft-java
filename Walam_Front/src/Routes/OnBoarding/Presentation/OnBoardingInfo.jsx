import React from "react";
import { Link } from 'react-router-dom'
import { IoIosApps, IoIosCloseCircle } from "react-icons/io";

const OnBoardingInfo = () => {
<<<<<<< HEAD
  return (
    <>
      <div className='pt-10'>
        <p>EcoPay</p>
      </div>
      <div className='py-2 text-wrap text-2xl text-center'>
        <p>Bienvenido a la primer Green FinTech latinoamericana</p>
      </div>

      <div className='p-[120px] text-center'>
        <p>video o animación</p>
      </div>

      <div className='flex flex-wrap justify-center content-between'>
        <Link to='/Register' className='font-bold bg-white text-black py-2 px-10 rounded border-2 border-black shadow'> Registrarse</Link>
        <div className='w-2' />
        <Link to='/Login' className='font-bold bg-black py-2 px-10 rounded border-2 border-black shadow'> Iniciar sesión</Link>
        </div>

        <div className='flex flex-wrap justify-center content-between'>
        <Link to='/DashboardUser' className='font-bold  py-2 px-10 '> DashboardUser</Link>
        <div className='w-2'></div>
        <Link to='/ForgotPassword' className='font-bold  py-2 px-10'> ForgotPassword</Link>
        <div className='w-2'></div>
        <Link to='/UsersDataForm' className='font-bold  py-2 px-10'> UsersDataForm</Link>
        </div>
      </>
    )
  }

=======

  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col text-center gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li className="p-1 font-normal">
        <a href="#" className="">Servicios</a>
      </li>
      <li className="p-1 font-normal">
        <a href="#" className="">Targeta</a>
      </li>
      <li className="p-1 font-normal">
        <a href="#" className="">Prestamos sustentables</a>
      </li>
    </ul>
  );

  const converted = {
    background: [
      "#33c751",
      "-webkit-linear-gradient(to right, #33c751, #001f04)",
      "linear-gradient(to right, #33c751, #001f04)"
    ],
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent"
  }

  return (
    <div className="bg-[#222121] h-full w-full pt-12"
    style={{backgroundImage: `url("/img/Group1x_75.png"), url("/img/Group0x_75.png")`, 
    backgroundPosition: '0px 0px, -146px -115px',
    backgroundRepeat: 'no-repeat'}} >
    
      <header className="sticky top-0 bg-[#1E1E1E99] shadow-md backdrop-blur">
        <nav className="z-10 h-max max-w-full rounded-none px-8 py-4">
          <div className="flex items-center justify-between text-blue-gray-900">
          <Link to="/" className="mr-4 ml-10 cursor-pointer py-1.5 "> 
            <img src="/img/Logox2.png" alt="Logo EcoPay" width={200} />
          </Link>
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <div className="flex items-center gap-x-2 text-center">
                <Link to='/Register' className='text-base bg-black py-2 px-8 rounded-lg border-2 border-[#B2FA5B] shadow hidden lg:inline-block'> Registrarse</Link>
                <Link to='/Login' className='text-base bg-transparent py-2 px-8 rounded-lg border-2 border-white shadow hidden lg:inline-block'> Iniciar sesión</Link>
              </div>
              <button
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? <IoIosCloseCircle /> : <IoIosApps />}
              </button>
            </div>
          </div>
          <nav className={openNav ? "flex flex-col items-center" : "hidden"}>
            {navList}
            <div className="flex items-center gap-x-2 text-center">
              <Link to='/Register' className='text-sm bg-black py-2 px-8 rounded-lg border-2 border-[#B2FA5B] shadow'> Registrarse</Link>
              <Link to='/Login' className='text-sm bg-transparent py-2 px-8 rounded-lg border-2 border-white shadow'> Iniciar sesión</Link>
            </div>
          </nav>
        </nav>
      </header>

      <main className="w-full flex flex-col justify-center items-center">

        <div className="pl-[25%] pt-[95px] pb-[200px]">
          <p className='text-5xl'>La primer</p>
          <p class="py-3 text-8xl bg-gradient-to-r from-[#B2FA5B] to-[#3BC53F] inline-block text-transparent bg-clip-text">Green FinTech </p>
          <p className='text-5xl'>de Latinoamérica</p>
        </div>

        <div className='py-16 pl-16 text-center bg-[#3E3E3Eb8] w-full border-b-2 border-black shadow-inner shadow-md'>
          <p className="text-left text-4xl pb-12">Servicios Latam</p>
          <div className="w-full flex flex-wrap justify-between">
            <div className="w-[350px] text-left">
              <h2 className="text-2xl pb-2">Envía Dinero</h2>
              <p>Fácil, rápida y segura que te permite enviar dinero a cualquier partedel continente sin importar si tiene o no una cuenta bancaria.</p>
              <h2 className="text-2xl pb-2 pt-8">Transferencias</h2>
              <p>Realiza transferencias gratis y al instante: a contactos, cuentas bancarias o billeteras virtuales.</p>
              <h2 className="text-2xl pb-2 pt-8">Extracciones</h2>
              <p>Sacá dinero con tu celular, con QR en comercios adheridos y con tu tarjeta prepaga en todos los cajeros del país.</p>
              <h2 className="text-2xl pb-2 pt-8">Cambio de Divisas</h2>
              <p>"Viaja sin fronteras: cambia divisas al instante”</p>
            </div>
            <img src="/img/Group2.png" alt="Lugares de Latinoamérica" className="w-2/3" />
          </div>
        </div>

        <div className='p-[100px] w-full text-right border-b-2 border-black shadow-inner shadow-md flex flex-wrap justify-evenly'>
          <div className="w-2/5 flex flex-col justify-around items-end">
            <p className="text-4xl">Solicita tu tarjeta Prepaga Virtual sin Costo y sin Burocracias</p>
            <img src="/img/Top Estate Agent.png" alt="Usuarios EcoPay" className="w-[280px]" />
          </div>
          <img src="/img/Card.png" alt="Targeta EcoPay" />
        </div>

        <div className='p-[60px] w-full border-b-2 border-black shadow-inner shadow-md flex flex-wrap justify-evenly'>
          <div className="w-2/5 flex flex-col justify-around items-end text-right">
            <img src="/img/Blog.png" alt="Usuarios EcoPay" className="w-[100px] pb-3" />
            <img src="/img/Blog2.png" alt="Usuarios EcoPay" className="w-[260px]" />
          </div>
          <div className="w-2/5 flex flex-col justify-around items-start text-left">
            <img src="/img/Blog3.png" alt="Usuarios EcoPay" className="w-[300px]" />
            <p className="text-4xl w-[250px]">Prestamos para emprendimientos sustentables</p>
          </div>
        </div>

      </main>

      <footer className="w-full pt-12"
    style={{backgroundImage: `url("/img/Footer.png")`, 
    backgroundPosition: '0px 0px',
    backgroundRepeat: 'no-repeat'}}>
      <div className='flex flex-wrap justify-center content-between'>
          <Link to='/DashboardUser' className='font-bold  py-2 px-10 '> DashboardUser</Link>
          <div className='w-2'></div>
          <Link to='/ForgotPassword' className='font-bold  py-2 px-10'> ForgotPassword</Link>
          <div className='w-2'></div>
          <Link to='/UsersDataForm' className='font-bold  py-2 px-10'> UsersDataForm</Link>
        </div>
        <p>Descargate la última versión de la app</p>
        <div className="p-[120px]"></div>
        <p>Copyright © 2023-2024 Grupo Java. Todos los derechos reservados. EcoPay .   Hecho en Argentina whit love jajajaja.</p>
      </footer>

    </div>
  )
}

>>>>>>> 6bd9ce11d4c43be7734f8632da4808d9901c2ccb
  export default OnBoardingInfo
