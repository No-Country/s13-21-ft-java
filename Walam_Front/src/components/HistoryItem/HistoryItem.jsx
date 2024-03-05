import { Link } from 'react-router-dom'
import { IoEllipsisVerticalCircleOutline } from 'react-icons/io5'
import { BsArrowDownSquareFill, BsArrowUpSquareFill } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function HistoryItem () {
  const [transactions, setTransactions] = useState()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = window.localStorage.getItem('token')
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const response = await axios.get('https://s13-21-ft-java.onrender.com/api/v1/users')
        setTransactions(response.data.account.transactions)
      } catch (error) {
        console.error('Error al guardar usuario:', error)
      }
    }

    fetchUser()
  }, [])
  return (
    <div className='flex flex-col w-full py-2'>
      {transactions && transactions.map((transaction) => (
        <div key={transaction.id} className='flex justify-between items-center w-[360px] xl:w-[100%]'>
          <div className='flex items-center gap-2 w-[60%]'>
            <Link to={`/HistoryDetails/${transaction.id}`}><IoEllipsisVerticalCircleOutline className='text-lg' /></Link>
            {transaction.type === 'DEPOSIT' && 'Deposito Realizado'}
            {transaction.type === 'WITHDRAW' && 'Retiro Realizado'}
            {transaction.type === 'TRANSFER' && 'Transferencia Realizada'}
          </div>
          <div>{transaction.type === 'DEPOSIT' ? <BsArrowUpSquareFill className='text-green-500' /> : <BsArrowDownSquareFill className='text-red-500' />}</div>
          <div className='flex items-center justify-evenly w-[24%] gap-12'>
            <p className={`${transaction.type === 'DEPOSIT' ? 'text-green-500' : 'text-red-500'}`}>{transaction.amount}</p>
          </div>
        </div>
      ))}
      <hr />
    </div>
  )
}
