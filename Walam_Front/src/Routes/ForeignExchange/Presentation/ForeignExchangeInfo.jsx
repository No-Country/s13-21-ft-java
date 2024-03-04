import { useState, useEffect } from 'react'
import axios from 'axios'
import { DisplayDate, ForeignInfo } from '../../../components'

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
      <h2 className='text-center pb-3 font-bold'>Tipo de cambio del dólar a pesos argentinos:</h2>
      <DisplayDate dateString={dateString} />
      <div>
        {exchangeRate && exchangeRate.map((data, key) => {
          return <ForeignInfo moneda={data.moneda} venta={data.venta} compra={data.compra} key={key} />
        })}
      </div>
    </div>
  )
}
