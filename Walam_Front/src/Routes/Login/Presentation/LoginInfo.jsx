import { Link, useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { FormButton, FormInput, GoogleButton, PasswordInput } from '../../../components'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import { useAuthenticateUserMutation, setUser } from '../../../api/apiSlice'
import { useDispatch } from 'react-redux'

const LoginInfo = () => {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [authenticateUser] = useAuthenticateUserMutation()
  const dispatch = useDispatch()

  const handleLogin = async (values) => {
    const { email, password } = values
    try {
      const response = await authenticateUser({ email, password }).unwrap()
      dispatch(setUser(response)) // Actualiza el usuario en Redux
      navigate('/DashboardUser')
      console.log(response)
    } catch (error) {
      console.error('Error al autenticar al usuario:', error)
      setError('Correo electrónico o contraseña incorrectos')
    }
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
    <div className='pt-8 xl:pt-0 relative w-full md:w-1/2 xl:max-w-[520px]'>
      <div className='absolute inset-0 xl:rounded-xl bg-DashboardDesktop  xl:opacity-25' />
      <div className='relative z-10 xl:rounded-xl py-8 px-20 w-full text-white flex flex-col'>
        <div className='w-[87%] xl:w-full flex justify-between'>
          <Link to='/'><FaArrowLeft /></Link>
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
            onSubmit={handleLogin}
          >
            {({ errors, values }) => (
              <Form className='rounded pt-6 h-[320px]'>
                {/* Form inputs */}
                <FormInput name='Correo electrónico' type='email' placeholder='Ingrese correo electrónico' errors={errors} id='email' value={values.email} />
                <PasswordInput name='Contraseña' placeholder='Ingrese contraseña' id='password' value={values.password} showPassword={showPassword} togglePasswordVisibility={togglePasswordVisibility} />
                <div className='flex flex-col lg:flex-row justify-between items-center'>
                  <Link className=' text-sm font-medium text-black-900 dark:text-black-300' to='/reset-password '>¿Olvidaste tu contraseña?</Link>
                </div>
                {/* Submit button */}
                <div className='flex flex-col justify-center pt-[210px] xl:pt-[180px]'>
                  <FormButton text='Iniciar Sesión' />
                  {error && <p className='text-red-600 text-xs italic text-center'>{error}</p>}
                </div>
              </Form>
            )}
          </Formik>
          <div className='flex flex-col justify-center pt-[210px] xl:pt-[180px]'>
            <GoogleButton />
            <Link to='/Register' className='text-center pt-3'> Registrarse</Link>
          </div>
        </main>
      </div>
    </div>
  )
}

export default LoginInfo
