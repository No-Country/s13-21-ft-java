import { Link } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { FormButton, FormInput } from '../../../components'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'


export default function Register () {
    const navigate = useNavigate()

  //Post a la API (onsubmit)

  //Validaciones
  const validationSchema = Yup.object().shape({    
    email: Yup.string().email('No es una dirección de correo eletrónico válida').required('No es una dirección de correo eletrónico válida')                 
  })
  
  const handleSubmit = () => {    
    navigate('/Register2')    
  }
  return (
    <div className='flex flex-row justify-between items-center lg:bg-primarygray h-screen w-screen box-border px-10'>       
        <section className='p-6 h-4/5 lg:w-2/3 max-w-lg'>
          <h1 className='text-white font-semibold text-3xl p-2 hidden lg:block'>EcoPay</h1>
          <div className='bg-white rounded-xl p-6 h-full'>
            <div className='flex justify-between'>         
              <Link to='/OnBoarding'><FaArrowLeft /></Link>
              <div>
                <span className='border rounded-full px-2 py-0.5  bg-black text-white'>1</span>
                <span>-</span>
                <span className='border rounded-full px-2 py-0.5'>2</span>
              </div>  
            </div>           
            <h2 className='text-xl mt-6 font-semibold'>Registro</h2>
            <h1 className='text-3xl font-semibold '>Ingresa tu correo electrónico</h1>
            <div className='w-full flex flex-col pt-6 h-[85%]'>
                <Formik
                initialValues={{email: ""}}      
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
                >
                    {({ errors, values }) => (
                        <Form className='rounded h-full flex flex-col justify-between'>  
                            <div>                
                                <FormInput name='Correo Electrónico' type='email' placeholder='ejemplo@gmail.com' errors={errors} id='email' value={values.email} />  
                                <p className='text-[0.65rem] text-gray-600 pl-1'>Necesitas acceso a tu cuenta de correo electrónico desde tu celular</p>
                                <h3 className='text-sm font-semibold pt-6 pl-1'>Te enviaremos un mail con tu clave</h3>
                            </div>
                            <div className='flex flex-col items-center'>
                                <FormButton text='Registrarse' color='bg-white' hover='hover:bg-primarygray' />
                            </div>
                        </Form>
                    )}
                </Formik>
                <div className='p-3 text-center text-sm font-semibold'>  
                    <Link to='/Login'>
                      <button className='pb-3'>Iniciar Sesión</button>
                    </Link>  
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