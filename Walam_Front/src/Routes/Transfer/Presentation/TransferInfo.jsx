import { useNavigate, Link } from 'react-router-dom'
import { FormInput } from '../../../components'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import axios from 'axios'
import { FaArrowLeft } from 'react-icons/fa'

export default function TransferInfo () {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [userAlias, setAlias] = useState('')
  const [cvu, setCvu] = useState('')
  const [quantity, setQuantity] = useState('')

  const onSubmit = async (values) => {
    try { // http://localhost:8080/auth/login
      // const response = await axios.post('https://s13-21-ft-java.onrender.com/auth/login', {
      //   email: values.email,
      //   password: values.password
      // })
      console.log('Login exitoso.')
      console.log(values)
      // console.log(response.data)
      navigate('/ConfirmTransfer')
    } catch (error) {
      console.log('Tu no pasaras. Error en la peticion.')
      console.error(error)
    }
  }

  const validationSchema = Yup.object().shape({
    // Definir la validación del esquema Yup para los campos del formulario
    alias: Yup.string().required('El alias es requerido'),
    cvu: Yup.number(),
    cantidad: Yup.number()
      .required('La cantidad a transferir es requerida')
  })

  const initialValues = {
    // Define initial values on the form
    alias: userAlias,
    cvu,
    cantidad: quantity
  }
  return (
    <div className='flex flex-col px-8'>
      <div className='flex gap-3'>
        <Link to='/DashboardUser' className='pt-3 xl:hidden'>
          <FaArrowLeft />
        </Link>
        <div>
          <h1 className='font-bold text-2xl'>Transferencia</h1>
          <h2 className='font-medium text-lg'>Seleccionar Alias o CVU</h2>
        </div>
      </div>
      <Formik
        className=''
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, values }) => (
          <Form className='rounded pt-6 h-[280px] xl:h-[240px]'>
            {/* Form inputs */}
            <FormInput name='Alias' type='text' placeholder='Juain' errors={errors} id='alias' value={values.alias} />
            <FormInput name='CVU' type='number' placeholder='000.000.000' errors={errors} id='cvu' value={values.cvu} />
            <FormInput name='Cantidad' type='number' placeholder='$000.00' errors={errors} id='cantidad' value={values.cantidad} />
            {/* Submit button */}
            <div className='flex flex-col justify-center pt-[270px] xl:pt-[136px]'>
              <input
                type='submit'
                className='bg-black text-white xl:bg-black xl:border-lime-400 disabled:bg-gray-400 cursor-pointer text-sm border border-gray-700 font-semibold mt-3 py-4 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full'
                value='Transferir'
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
