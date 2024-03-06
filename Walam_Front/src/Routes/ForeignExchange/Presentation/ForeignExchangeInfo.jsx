import { useState, useEffect } from 'react'
import axios from 'axios'
import { DisplayDate, ForeignInfo } from '../../../components'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

export default function ForeignExchangeInfo () {
  const [exchangeRate, setExchangeRate] = useState(null)
  const [dateString, setDateString] = useState(null)

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get('https://dolarapi.com/v1/cotizaciones')
        setExchangeRate(response.data)
        setDateString(response.data[0].fechaActualizacion)
      } catch (error) {
        console.error('Error fetching exchange rate:', error)
      }
    }

    fetchExchangeRate()
  }, [])

  return (
    <div>
      <div className='flex items-center gap-2 xl:gap-0'>
        <Link to='/DashBoardUser' className='pl-4 self-start pt-2'>            <FaArrowLeft />
        </Link>
        <h2 className='text-center pb-3 font-bold text-2xl'>Tipo de cambio de moneda a pesos argentinos:</h2>
      </div>
      <DisplayDate dateString={dateString} />
      <div className='w-full flex flex-col items-center'>
        {exchangeRate && exchangeRate.map((data, key) => {
          return <ForeignInfo moneda={data.moneda} venta={data.venta} compra={data.compra} key={key} />
        })}
      </div>
    </div>
  )
}
