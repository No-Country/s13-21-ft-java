import { Link } from 'react-router-dom'
import { IoEllipsisVerticalCircleOutline } from 'react-icons/io5'
import { BsArrowDownSquareFill, BsArrowUpSquareFill } from 'react-icons/bs'

export default function HistoryItem ({ name, type, total }) {
  return (
    <div className='flex flex-col w-full py-2'>
      <div className='flex justify-between items-center w-[360px] xl:w-[100%]'>
        <div className='flex items-center gap-2 w-[60%] '>
          <Link to='/HistoryDetails'> <IoEllipsisVerticalCircleOutline className='text-lg' /></Link>
          <p>{name}</p>
        </div>
        <div>
          {type ? <BsArrowUpSquareFill className='text-green-500' /> : <BsArrowDownSquareFill className='text-red-500' />}
        </div>
        <div className='flex items-center justify-evenly w-[24%] gap-12'>
          <p className={`${type ? 'text-green-500' : 'text-red-500'}`}>{total}</p>
        </div>
      </div>
      <hr />
    </div>
  )
}
