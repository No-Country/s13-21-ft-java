import { Link, useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { FormButton, FormInput, GoogleButton, PasswordInput } from '../../../components'
import { FaArrowLeft } from 'react-icons/fa'
import { useState } from 'react'
/* import { useCreateUserMutation } from '../../../api/apiSlice' */

export default function Register () {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [showPassword2, setShowPassword2] = useState(false)
  /* const [createUser] = useCreateUserMutation() */

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

 /*  const handleSubmit = async (values) => {
    const { email, password } = values
    const response = await createUser({ email, password })
    const userId = response.data.id

    navigate('/Login')
  } */
  const handleSubmit = () => {  
    alert('Registro exitoso')  
    navigate('/Login')
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
    <div className='relative w-4/5 md:w-2/3 lg:max-w-[520px]'>
      <div className='absolute inset-0 rounded-xl bg-loginColor opacity-25'/>
      <div className='relative z-10 rounded-xl py-8 px-20 w-full text-white flex flex-col'>
        <div className='w-[87%] xl:w-full flex justify-between'>
          <Link to='/'><FaArrowLeft className='xl:hidden'/></Link>
        </div>
        <main>
          <div className='flex flex-col pt-4 xl:pt-0 pb-6'>
            <h3 className='font-medium'>Registro</h3>
            <h1 className='text-4xl'>Ingresa tu Correo Electrónico</h1>
          </div>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {({ errors, values }) => (
                <Form className='rounded pt-6 h-[320px]'>
                  <div>
                    <FormInput name='Correo Electrónico' type='email' placeholder='ejemplo@gmail.com' errors={errors} id='email' value={values.email} />
                    <PasswordInput name='Contraseña' placeholder='********' errors={errors} id='password' value={values.password} showPassword={showPassword} togglePasswordVisibility={togglePasswordVisibility} />
                    <PasswordInput name='Repetir Contraseña' placeholder='********' errors={errors} id='password2' value={values.password2} showPassword={showPassword2} togglePasswordVisibility={togglePasswordVisibility2} />
                  </div>
                  <div className='flex flex-col justify-center pt-[150px] xl:pt-[90px]'>
                    <FormButton text='Registrarse' hover='hover:bg-primarygray' />                    
                  </div>
                </Form>
              )}
            </Formik>
            <div className='flex flex-col justify-center pt-[250px] xl:pt-44'>
            <GoogleButton />
            <Link to='/Login' className='text-center pt-3'>Iniciar Sesión</Link>
          </div>
        </main>
      </div>
    </div>
  )
}
