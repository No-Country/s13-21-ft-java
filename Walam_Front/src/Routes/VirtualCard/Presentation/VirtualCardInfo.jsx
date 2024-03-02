import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { useCollapse } from 'react-collapsed';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const VirtualCardInfo = () => {

	return (
		<div className='w-full px-8 flex flex-col'>
			<div className='flex items-center gap-3 self-start py-8 '>
				<Link to='/DashBoardUser'> <FaArrowLeft /></Link>
				<h1 className='font-bold text-2xl'>
					Tarjeta Virtual
				</h1>
			</div>
			<section>
				
			</section>
		</div>
	)
}

export default VirtualCardInfo