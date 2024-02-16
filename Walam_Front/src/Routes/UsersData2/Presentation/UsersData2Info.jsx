import { Link } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { FormButton, FormInput } from '../../../components'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'


export default function UsersData2 () {
    const navigate = useNavigate()

  //Post a la API (onsubmit)

  //Validaciones
  const validationSchema = Yup.object().shape({    
    country: Yup.string().min(3, 'Mínimo 3 caractares').max(20, 'Máximo 20 caracteres').required('País requerido'),
    residence: Yup.string().min(3, 'Mínimo 3 caractares').max(20, 'Máximo 20 caracteres').required('País  requerido'),  
    cuil: Yup.number().min(11,'Mínimo 11 caractares').required('CUIL requerido')        
  })

  const initialValues = { 
    country: '',
    residence: '',
    cuil: ''
  }
  
  const handleSubmit = () => {    
    navigate('/')    
  }
  return (
    <div className='flex flex-row justify-between items-center lg:bg-primarygray h-screen w-screen box-border px-10'>       
        <section className='p-6 h-4/5 lg:w-2/3 max-w-lg'>
          <h1 className='text-white font-semibold text-3xl p-2 hidden lg:block'>EcoPay</h1>
          <div className='bg-white rounded-xl p-6 h-full'>
            <div className='flex justify-between'>         
              <Link to='/UsersData'><FaArrowLeft /></Link>
              <div>
                <span className='border rounded-full px-2 py-0.5  bg-black text-white'>1</span>
                <span>-</span>
                <span className='border rounded-full px-2 py-0.5 bg-black text-white'>2</span>
              </div>  
            </div>           
            <h2 className='text-xl mt-6 font-semibold'>Datos</h2>
            <h1 className='text-3xl font-semibold '>Ultimos pasos para completar tu registro</h1>
            <div className='w-full flex flex-col pt-6 h-4/5'>
                <Formik
                initialValues={initialValues}      
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
                >
                    {({ errors, values }) => (
                        <Form className='rounded h-full flex flex-col justify-between'>  
                            <div>                
                                <FormInput name='País de Nacimiento' type='text' placeholder='Colombia' errors={errors} id='country' value={values.country} /> 
                                <FormInput name='País de Residencia' type='text' placeholder='Colombia' errors={errors} id='residence' value={values.residence} /> 
                                <FormInput name='CUIL (cambia por pais)' type='number' placeholder='00-00000000-0' errors={errors} id='cuil' value={values.cuil} /> 
                                <p className='text-[0.65rem] text-gray-600 pl-1'>Cómo consigo mi CUIL</p>                                
                            </div>
                            <div className='flex flex-col items-center'>
                                <FormButton text='Validar Datos' color='bg-white' hover='hover:bg-primarygray' />
                            </div>
                        </Form>
                    )}
                </Formik>
                <div className='p-3 text-center text-sm font-semibold'>  
                    <Link to='/'>
                      <button className='pb-3'>Quizás más tarde</button>
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