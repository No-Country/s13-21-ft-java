import { useState } from 'react';
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { useCollapse } from 'react-collapsed';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const VirtualCardInfo = () => {

	let numero='123456789012345', fecha='03/24', codigo='123';
	const [state, setState] = useState(true);
	const [data={num,cod}, setData] = useState({num:'***********' + numero.substring(numero.length - 4), cod:'***'});
	const [card, setCard] = useState(true);

	function handleClick() {
    setState(!state);
		if(state){
			setData({num:numero, cod:codigo});
		} else {
			setData({num:'***********' + numero.substring(numero.length - 4), cod:'***'});
		}
  }

	function handleClickBlock() {
    setCard(!card);
  }

	return (
		<div className='w-full px-8 flex flex-col'>
			<div className='flex items-center gap-3 self-start py-8 '>
				<Link to='/DashBoardUser'> <FaArrowLeft /></Link>
				<h1 className='font-bold text-2xl'>
					Tarjeta Virtual
				</h1>
			</div>

			<div>
				<section id='card' className='w-full py-2 flex flex-col items-center'>
					<div className='bg-OnBoarding-bgImage bg-OnBoarding-bgPosition bg-no-repeat w-[380px] pb-3' style={{backgroundImage:'url("/img/Card.png")', backgroundSize:'100%'}}>
						<div className='px-5 pt-[85px] pb-2'>
							<div className=''>
								<p className='text-sm'>Numero de tarjeta</p>
								<p className='text-lg'>{data.num}</p>
							</div>
							<div className='flex justify-between py-2'>
								<div>
									<p className='text-sm'>Fecha de expedición</p>
									<p className='text-lg'>{fecha}</p>
								</div>
								<div>
									<p className='text-sm'>Código de seguridad CVV</p>
									<p className='text-lg'>{data.cod}</p>
								</div>
							</div>
							<p>PEDRITA USUARIO</p>
						</div>
					</div>
					<button onClick={handleClick} className='border border-black h-[46px] w-[380px] px-3 rounded-xl bg-neutral-900'>
						{state? 'Ver datos': 'Ocultar datos' }
					</button>
				</section>
				<section className='w-full py-4 flex flex-col'>
					<p className='text-xl'>Opciones</p>
					<button onClick={handleClickBlock} className='border-b border-black h-[46px] w-full p-3'>
						<p>{card? 'Bloquear Tarjeta': 'Desbloquear Tarjeta' }</p>
					</button>
				</section>
			</div>
		</div>
	)
}

export default VirtualCardInfo