import { Link, useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { FormButton, FormInput, GoogleButton, PasswordInput } from '../../../components'
import { FaArrowLeft } from 'react-icons/fa'
import { useState } from 'react'
<<<<<<< HEAD
import { useCreateUserMutation } from '../../../api/apiSlice'
=======
import axios from 'axios'
>>>>>>> 6bd9ce11d4c43be7734f8632da4808d9901c2ccb

export default function Register () {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [showPassword2, setShowPassword2] = useState(false)
  const [createUser] = useCreateUserMutation()

  // Validaciones
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('No es una dirección de correo eletrónico válida').required('No es una dirección de correo eletrónico válida'),
    password: Yup.string().min(8, 'La contraseña debe tener mínimo 8 caracteres')
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
      .required('La contraseña es requerida'),
    password2: Yup.string().oneOf([Yup.ref('password')], 'Las contraseñas no coinciden').required('Contraseña requerida')
  })

<<<<<<< HEAD
  const handleSubmit = async (values) => {
    const { email, password } = values
    const response = await createUser({ email, password })
    const userId = response.data.id

    navigate('/Login')
=======
  const handleSubmit = async (values) => { 
    try {                             // http://localhost:8080/auth/register
      const response = await axios.post('https://s13-21-ft-java.onrender.com/auth/register', {
        email: values.email,
        password: values.password
      })
      console.log("Registro exitoso.")
      console.log(values)
      console.log(response.data)
      navigate('/Login')
    } catch (error) {
      console.log("Tu no pasaras. Error en la peticion.")
      console.error(error)
    }
>>>>>>> 6bd9ce11d4c43be7734f8632da4808d9901c2ccb
  }
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2)
  }

  const initialValues = {
    email: '',
    password: '',
    password2: ''
  }

  return (
    <div className='flex flex-row justify-between items-center lg:bg-primarygray h-screen w-screen box-border px-10'>
      <section className='p-6 h-4/5 lg:w-2/3 max-w-lg'>
        <h1 className='text-white font-semibold text-3xl p-2 hidden lg:block'>EcoPay</h1>
        <div className='bg-white rounded-xl p-6 h-full'>
          <Link to='/'><FaArrowLeft /></Link>
          <h2 className='text-xl mt-6 font-semibold'>Registro</h2>
          <h1 className='text-3xl font-semibold '>Ingresa tu correo electrónico</h1>
          <div className='w-full flex flex-col pt-6 h-[85%]'>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {({ errors, values }) => (
                <Form className='rounded h-full flex flex-col justify-between'>
                  <div>
                    <FormInput name='Correo Electrónico' type='email' placeholder='ejemplo@gmail.com' errors={errors} id='email' value={values.email} />
                    <PasswordInput name='Contraseña' placeholder='********' errors={errors} id='password' value={values.password} showPassword={showPassword} togglePasswordVisibility={togglePasswordVisibility} />
                    <PasswordInput name='Repetir Contraseña' placeholder='********' errors={errors} id='password2' value={values.password2} showPassword={showPassword2} togglePasswordVisibility={togglePasswordVisibility2} />
                  </div>
                  <div className='flex flex-col items-center px-3'>
                    <FormButton text='Registrarse' color='bg-white' hover='hover:bg-primarygray' />
                  </div>
                </Form>
              )}
            </Formik>
            <div className='p-3 text-center text-sm font-semibold flex flex-col'>
              <GoogleButton />
              <Link to='/Login' className='m-3'>Iniciar Sesión</Link>
            </div>
          </div>
        </div>
      </section>
      <section className='p-24 hidden lg:block text-white'>
        <p>Espacio para video, animacion, textos, botones</p>
      </section>
    </div>
  )
}
