import { Link } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { FormButton, FormInput } from '../../../components'
import { useNavigate } from 'react-router-dom'


export default function UsersData () {
    const navigate = useNavigate()

  //Post a la API (onsubmit)

  //Validaciones
  const validationSchema = Yup.object().shape({    
    name: Yup.string().min(3, 'Mínimo 3 caractares').max(20, 'Máximo 20 caracteres').required('Nombre requerido'),
    lastname: Yup.string().min(3, 'Mínimo 3 caractares').max(20, 'Máximo 20 caracteres').required('Apellido requerido'),  
    birth: Yup.date().required('Fecha requerida'),
    phone: Yup.number().min(6,'Mínimo 6 caractares').required('Teléfono requerido')        
  })

  const initialValues = {    
    name: '',
    lastname: '',
    birth: '',
    phone: ''
  }
  
  const handleSubmit = () => {      
    navigate('/UsersData2')    
  }

  return (
    <div className='flex flex-row justify-between items-center lg:bg-primarygray h-screen w-screen box-border px-10'>       
        <section className='p-6 h-4/5 lg:w-2/3 max-w-lg'>
          <h1 className='text-white font-semibold text-3xl p-2 hidden lg:block'>EcoPay</h1>
          <div className='bg-white rounded-xl p-6 h-full'>
            <div className='flex justify-between'>         
              <Link to='/Register2'>
                  {/* icono flecha atras */}
                <button className=''>Atrás</button>
              </Link>
              <div>
                <span className='border rounded-full px-2 py-0.5  bg-black text-white'>1</span>
                <span>-</span>
                <span className='border rounded-full px-2 py-0.5'>2</span>
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
                                <FormInput name='Nombres' type='text' placeholder='Juan Martin' errors={errors} id='name' value={values.name} /> 
                                <FormInput name='Apellidos' type='text' placeholder='López López' errors={errors} id='lastname' value={values.lastname} /> 
                                <FormInput name='Fecha de Nacimiento' type='date' placeholder='00 ENE 0000' errors={errors} id='birth' value={values.birth} /> 
                                <FormInput name='Teléfono' type='tel' placeholder='(0000)00000000' errors={errors} id='phone' value={values.phone} />
                            </div>
                            <div className='flex flex-col items-center'>
                                <FormButton text='Siguiente' color='bg-white' hover='hover:bg-primarygray' />
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