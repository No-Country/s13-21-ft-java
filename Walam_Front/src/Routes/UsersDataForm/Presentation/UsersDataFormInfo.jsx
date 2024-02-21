import { Link } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { FormButton, FormInput } from '../../../components'
import { useNavigate } from 'react-router-dom'
import { FaAngleDoubleDown, FaArrowLeft } from 'react-icons/fa'


export default function UsersDataFormInfo () {
    const navigate = useNavigate()

  //Conexion a la API (onsubmit/onreset)

  //Validaciones
  const validationSchema = Yup.object().shape({    
    name: Yup.string().min(3, 'Mínimo 3 caractares').max(20, 'Máximo 20 caracteres').required('Nombre requerido'),
    lastname: Yup.string().min(3, 'Mínimo 3 caractares').max(20, 'Máximo 20 caracteres').required('Apellido requerido'),  
    birth: Yup.date().required('Fecha requerida'),
    phone: Yup.number().min(6,'Mínimo 6 caractares').required('Teléfono requerido'),
    country: Yup.string().min(3, 'Mínimo 3 caractares').max(20, 'Máximo 20 caracteres').required('País requerido'),
    residence: Yup.string().min(3, 'Mínimo 3 caractares').max(20, 'Máximo 20 caracteres').required('País  requerido'),  
    docNumber: Yup.number().min(6,'Mínimo 6 caractares').required('Número de documento requerido')          
  })

  const initialValues = {    
    name: '',
    lastname: '',
    birth: '',
    phone: '',
    country: '',
    residence: '',
    docNumber: ''
  }  
  
  const handleSubmit = () => {      
    navigate('/DashboardUser')    
  }

  const handleDelete = () => {      
    navigate('/')    
  }

  return (
    <div className='flex flex-row justify-between items-center lg:bg-primarygray h-screen w-screen box-border px-10'>       
        <section className='h-4/5 lg:w-2/3 max-w-lg box-border'>
          <h1 className='text-white font-semibold text-3xl p-2 hidden lg:block'>EcoPay</h1>
          <div className='bg-white rounded-xl py-6 px-3 h-full box-border'>
            <Link to='/'><FaArrowLeft /></Link>
            <div className='pb-2 px-4'>                      
              <h2 className='text-xl mt-6 font-semibold'>Datos</h2>
              <h1 className='text-3xl font-semibold '>Ultimos pasos para completar tu registro</h1>
            </div>
            <div className='w-full flex flex-col py-8 h-4/5 overflow-y-auto'>
                <Formik
                initialValues={initialValues}      
                onSubmit={handleSubmit}                
                validationSchema={validationSchema}
                >
                    {({ errors, values }) => (
                        <Form className='rounded h-full flex flex-col justify-between px-8'>  
                            <div>                
                                <FormInput name='Nombres' type='text' placeholder='Juan Martin' errors={errors} id='name' value={values.name} /> 
                                <FormInput name='Apellidos' type='text' placeholder='López López' errors={errors} id='lastname' value={values.lastname} /> 
                                <FormInput name='Fecha de Nacimiento' type='date' placeholder='00 ENE 0000' errors={errors} id='birth' value={values.birth} /> 
                                <FormInput name='Teléfono' type='tel' placeholder='(0000)00000000' errors={errors} id='phone' value={values.phone} />
                                <FormInput name='País de Nacimiento' type='text' placeholder='Colombia' errors={errors} id='country' value={values.country} /> 
                                <FormInput name='País de Residencia' type='text' placeholder='Colombia' errors={errors} id='residence' value={values.residence} /> 
                                <FormInput name='Numero de Documento de Identidad' type='tel' placeholder='0000000000' errors={errors} id='docNumber' value={values.docNumber} />                                
                            </div>
                            <div className='flex flex-col items-center pb-3'>
                                <FormButton text='Guardar Datos' color='bg-white' hover='hover:bg-primarygray' />
                                <button onClick={handleDelete} className='m-3 text-center text-sm font-semibold text-red-600 hover:bg-red-600 hover:text-white rounded-lg py-2 px-4 w-full mb-16'>Eliminar Cuenta</button>
                            </div>
                        </Form>
                    )}                    
                </Formik>                
                <div className='bg-white w-full sticky top-full flex justify-center opacity-90 has-tooltip'>
                  <span className='tooltip rounded shadow-lg p-2 bg-gray-100 -mt-12'>Desplazar hacia abajo</span>                  
                  <FaAngleDoubleDown className='rounded-full bg-black p-1 h-8 w-8 text-white text-center'/>
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
