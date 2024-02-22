import { Link, useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { BsQrCode } from 'react-icons/bs'
import { FormButton, FormInput, GoogleButton, PasswordInput } from '../../../components'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
// import axios from 'axios'

const LoginInfo = () => {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const onSubmit = async (values) => {
    console.log(values)
    navigate('/DashboardUser')
    // try {
    //   const response = await axios.post('/api/users/login', values)
    //   setError('')
    //   if (response.data.error) {
    //     setError('password', { message: response.data.error })
    //   } else {
    //     // Manejar el éxito del inicio de sesión, por ejemplo, almacenar el token en el estado global.
    //     console.log('Login successful! Token:', response.data.token)
    //     // Guardar en Local Storage solo si el checkbox está marcado
    //     if (actualState) {
    //       window.localStorage.setItem('savedUser', response.data.email)
    //       window.localStorage.setItem('savedPassword', response.data.password)
    //     }
    //     logControl()
    //     navigate('/')
    //     window.scrollTo(0, 0)
    //   }
    // } catch (error) {
    //   if (error.response.status === 400 && error.response.data.error === 'Correo o contraseña invalida') {
    //     setError('Correo o contraseña invalida')
    //   } else {
    //     setError('Error al registrar usuario')
    //   }
    // }
  }
  const validationSchema = Yup.object().shape({
    // Definir la validación del esquema Yup para los campos del formulario
    email: Yup.string().email('El correo no es válido').required('El correo es requerido'),
    password: Yup.string().max(12, 'La contraseña debe tener máximo 12 caracteres')
      .matches(
        /^(?=.*[a-z])/,
        'Debe contener al menos una letra en minúscula'
      )
      .matches(
        /^(?=.*[A-Z])/,
        'Debe contener al menos una letra en mayúscula'
      )
      .matches(
        /^(?=.*[0-9])/,
        'Debe contener al menos un número'
      )
      .matches(
        /^(?=.*[!@#/$%/^&/*])/,
        'Debe contener al menos un caracter especial'
      )
      .required('La contraseña es requerida')
  })

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword) // Hide or show the password
  }

  const initialValues = {
    // Define initial values on the form
    email: userEmail,
    password: userPassword
  }

  return (
    <div className=' w-full md:w-1/2 xl:max-w-[490px]'>
      <h1 className='text-white text-2xl font-medium pb-2 hidden xl:block'>EcoPay</h1>
      <div className='xl:rounded-xl xl:bg-white p-4 w-full'>
        <div className='w-[87%] xl:w-full flex justify-between'>
          <Link to='/'><FaArrowLeft className='xl:hidden' /></Link>
          <div className='xl:border-2 xl:border-black xl:p-2 xl:rounded-xl '>
            <BsQrCode className='text-[36px] hidden xl:block ' />
          </div>
        </div>
        <main className=''>
          <div className='flex flex-col pt-4 xl:pt-0 pb-6'>
            <h3 className='font-medium'>Ingreso</h3>
            <h1 className='text-4xl w-7'>
              Bienvenido nuevamente
            </h1>
          </div>
          <Formik
            className=''
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ errors, values }) => (
              <Form className='rounded pt-6 h-[300px]'>
                {/* Form inputs */}
                <FormInput name='Correo electrónico' type='email' placeholder='Ingrese correo electrónico' errors={errors} id='email' value={values.email} />
                <PasswordInput name='Contraseña' placeholder='Ingrese contraseña' id='password' value={values.password} showPassword={showPassword} togglePasswordVisibility={togglePasswordVisibility} />
                <div className='flex flex-col lg:flex-row justify-between items-center'>
                  <Link className=' text-sm font-medium text-black-900 dark:text-black-300' to='/reset-password '>¿Olvidaste tu contraseña?</Link>
                </div>
                {/* Submit button */}
                <div className='flex flex-col justify-center pt-[270px] xl:pt-[180px]'>
                  <FormButton text='Iniciar Sesión' color='bg-white' hover='hover:bg-gray-400' />
                  {error && <p className='text-red-600 text-xs italic text-center'>{error}</p>}
                </div>
              </Form>
            )}
          </Formik>
          <div className='flex flex-col justify-center pt-[270px] xl:pt-[180px]'>
            <GoogleButton />
            <Link to='/Register' className='text-center pt-3'> Registrarse</Link>
          </div>
        </main>
      </div>
    </div>
  )
}

export default LoginInfo
