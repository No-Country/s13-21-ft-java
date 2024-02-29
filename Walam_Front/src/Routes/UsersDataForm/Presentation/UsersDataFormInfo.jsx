import { Link, useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { FormButton, FormInput } from '../../../components'
import { FaArrowLeft } from 'react-icons/fa'
import { GoPencil } from "react-icons/go"
import { useDeleteUserMutation, useUpdateUserMutation, useGetLoggedInUserQuery } from '../../../api/apiSlice'

export default function UsersDataFormInfo () {
  const navigate = useNavigate()
  const [deleteUser] = useDeleteUserMutation()
  const [updateUser] = useUpdateUserMutation()
  const { data: loggedInUser } = useGetLoggedInUserQuery()
  // Conexion a la API (onsubmit/onreset)

  // Validaciones
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Mínimo 3 caractares').max(20, 'Máximo 20 caracteres').required('Nombre requerido'),
    lastname: Yup.string().min(3, 'Mínimo 3 caractares').max(20, 'Máximo 20 caracteres').required('Apellido requerido'),
    birth: Yup.date().required('Fecha requerida'),
    phone: Yup.number().min(6, 'Mínimo 6 caractares').required('Teléfono requerido'),
    country: Yup.string().min(3, 'Mínimo 3 caractares').max(20, 'Máximo 20 caracteres').required('País requerido'),
    docNumber: Yup.number().min(6, 'Mínimo 6 caractares').required('Número de documento requerido')
  })

  const initialValues = {
    name: loggedInUser?.name || '',
    lastname: loggedInUser?.lastname || '',
    birth: loggedInUser?.birth || '',
    phone: loggedInUser?.phone || '',
    country: loggedInUser?.country || '',
    docNumber: loggedInUser?.docNumber || ''
  }

  // const handleSubmit = (values) => {
  //   const { name, lastname, birth, phone, country, residence, docNumber } = values

  //   console.log(name, lastname, birth, phone, country, residence, docNumber)

  //   createUser({ name, lastname, birth, phone, country, residence, docNumber })
  //   navigate('/DashboardUser')
  // }

  const handleSubmit = (values) => {
    const updatedUserData = {
      ...loggedInUser,
      ...values
    }

    updateUser({ id: loggedInUser.id, userData: updatedUserData })
      .unwrap()
      .then(() => navigate('/DashboardUser'))
      .catch((error) => console.error('Error al actualizar usuario:', error))
  }

  const handleDelete = () => {
    deleteUser(loggedInUser.id)
      .unwrap()
      .then(() => navigate('/DashboardUser'))
      .catch((error) => console.error('Error al eliminar usuario:', error))
  }

  return (    
      <section className='text-white rounded-xl min-w-[350px] w-4/5 xl:max-h-[550px] py-2'> 
          <div className='flex items-center gap-3 self-start p-2'>
            <Link to='/DashboardUser'><FaArrowLeft /></Link>
            <h2 className='text-xl font-semibold'>Perfil</h2>            
          </div>
          <div className='w-full flex flex-col h-full overflow-y-auto'>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {({ errors, values }) => (
                <Form className='rounded flex flex-col justify-between px-6'>
                  <div>
                    <div className='flex items-center gap-2'>
                      <FormInput name='Nombres' type='text' placeholder='Juan Martin' errors={errors} id='name' value={values.name} />
                      <GoPencil className='bg-gradient-to-b from-[#3BC53F] to-[#B2FA5B] h-8 w-8 p-1 rounded-xl'/>
                    </div>
                    <div className='flex items-center gap-2'>
                      <FormInput name='Apellidos' type='text' placeholder='López López' errors={errors} id='lastname' value={values.lastname} />
                      <GoPencil className='bg-gradient-to-b from-[#3BC53F] to-[#B2FA5B] h-8 w-8 p-1 rounded-xl'/>
                    </div>
                    <div className='flex items-center gap-2'>
                      <FormInput name='Número de Documento de Identidad' type='tel' placeholder='0000000000' errors={errors} id='docNumber' value={values.docNumber} />
                      <GoPencil className='bg-gradient-to-b from-[#3BC53F] to-[#B2FA5B] h-8 w-8 p-1 rounded-xl'/>
                    </div>
                    <div className='flex items-center gap-2'>
                      <FormInput name='Teléfono' type='tel' placeholder='(0000)00000000' errors={errors} id='phone' value={values.phone} />
                      <GoPencil className='bg-gradient-to-b from-[#3BC53F] to-[#B2FA5B] h-8 w-8 p-1 rounded-xl'/>
                    </div>
                    <div className='flex items-center gap-2'>
                      <FormInput name='Fecha de Nacimiento' type='date' placeholder='00 ENE 0000' errors={errors} id='birth' value={values.birth} />
                      <GoPencil className='bg-gradient-to-b from-[#3BC53F] to-[#B2FA5B] h-8 w-8 p-1 rounded-xl'/>
                    </div>
                    <div className='flex items-center gap-2'>
                      <FormInput name='País' type='text' placeholder='Colombia' errors={errors} id='country' value={values.country} />
                      <GoPencil className='bg-gradient-to-b from-[#3BC53F] to-[#B2FA5B] h-8 w-8 p-1 rounded-xl'/>
                    </div>                    
                  </div>
                  <div className='flex flex-col items-center pb-3'>
                    <FormButton text='Guardar Datos' hover='hover:bg-primarygray' />
                    <button onClick={handleDelete} className='m-3 text-center text-sm font-semibold text-red-600 hover:bg-red-600 hover:text-white rounded-lg py-2 px-4 w-full mb-16'>Eliminar Cuenta</button>
                  </div>
                </Form>
              )}
            </Formik>            
          </div>
        
      </section> 
  )
}
