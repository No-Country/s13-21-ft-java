import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const HelpInfo = () => {
	return (
		<div className='w-full px-8 flex flex-col items-cente'>
			<div className='flex items-center gap-3 self-start py-8 '>
				<Link to='/DashBoardUser'> <FaArrowLeft /></Link>
				<h1 className='font-bold text-2xl'>
					Centro de Ayuda
				</h1>
			</div>
			<section className='flex flex-col w-full items-center justify-center'>
				
			</section>
		</div>
	)
}

export default HelpInfo
