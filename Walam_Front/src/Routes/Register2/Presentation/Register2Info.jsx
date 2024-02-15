import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { FormButton, FormInput } from '../../../components'
import { Link, useNavigate } from 'react-router-dom'

const Register2Info = () => {
  const navigate = useNavigate()

    //Post a la API (onsubmit)

    //Validaciones
    const validationSchema = Yup.object().shape({    
        password: Yup.string().min(6, 'Clave inválida').max(6, 'Clave inválida').required('Clave requerida')                 
    })
    
    const handleSubmit = () => {
        navigate('/UsersData')
    }

    return (
        <div className='flex flex-row justify-between items-center lg:bg-primarygray h-screen w-screen box-border px-10'>       
        <section className='p-6 h-4/5 sm:w-2/3 max-w-lg'>
          <h1 className='text-white font-semibold text-3xl p-2 hidden lg:block'>EcoPay</h1>
          <div className='bg-white rounded-xl p-6 h-full'>
            <div className='flex justify-between'>         
              <Link to='/Register'>
                  {/* icono flecha atras */}
                <button className=''>Atrás</button>
              </Link>
              <div>
                <span className='border rounded-full px-2 py-0.5  bg-black text-white'>1</span>
                <span>-</span>
                <span className='border rounded-full px-2 py-0.5 bg-black text-white'>2</span>
              </div>  
            </div>           
            <h2 className='text-xl mt-6 font-semibold'>Registro</h2>
            <h1 className='text-3xl font-semibold '>Ingresa la clave</h1>
            <div className='w-full flex flex-col h-4/5'>
                <Formik
                    initialValues={{password: ""}}      
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                    >
                    {({ errors, values }) => (
                        <Form className='rounded h-full flex flex-col justify-between'>  
                            <div> 
                                <h3 className='text-sm font-semibold pt-6 pl-1 pb-6'>Te enviamos un mail con tu clave de acceso</h3>               
                                <FormInput name='Clave' type='password' placeholder='******' errors={errors} id='password' value={values.password} />
                            </div>
                            <div className='flex flex-col items-center'>
                                <FormButton text='Terminar Registro' color='bg-white' hover='hover:bg-primarygray' />
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
  
export default Register2Info