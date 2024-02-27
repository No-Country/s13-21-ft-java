import { Link, useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { FormButton, FormInput } from '../../../components'
import { FaArrowLeft } from 'react-icons/fa'
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
    <div className='flex flex-row justify-between items-center lg:bg-primarygray h-screen w-screen box-border px-10'>
      <section className='h-4/5 lg:w-2/3 max-w-lg box-border'>
        <h1 className='text-white font-semibold text-3xl p-2 hidden lg:block'>EcoPay</h1>
        <div className='bg-white rounded-xl py-6 px-3 h-full box-border'>
          <Link to='/DashboardUser'><FaArrowLeft /></Link>
          <div className='pb-2 px-4'>
            <h2 className='text-xl mt-6 font-semibold'>Perfil</h2>
            <h1 className='text-3xl font-semibold '>Modificación de Datos de Usuario</h1>
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
                    <FormInput name='Número de Documento de Identidad' type='tel' placeholder='0000000000' errors={errors} id='docNumber' value={values.docNumber} />
                    <FormInput name='Teléfono' type='tel' placeholder='(0000)00000000' errors={errors} id='phone' value={values.phone} />
                    <FormInput name='Fecha de Nacimiento' type='date' placeholder='00 ENE 0000' errors={errors} id='birth' value={values.birth} />
                    <FormInput name='País' type='text' placeholder='Colombia' errors={errors} id='country' value={values.country} />
                  </div>
                  <div className='flex flex-col items-center pb-3'>
                    <FormButton text='Guardar Datos' color='bg-white' hover='hover:bg-primarygray' />
                    <button onClick={handleDelete} className='m-3 text-center text-sm font-semibold text-red-600 hover:bg-red-600 hover:text-white rounded-lg py-2 px-4 w-full mb-16'>Eliminar Cuenta</button>
                  </div>
                </Form>
              )}
            </Formik>            
          </div>

        </div>
      </section>
      <section className='p-24 hidden lg:block text-white'>
        <p>Espacio para video, animacion, textos, botones</p>
      </section>
    </div>
  )
}
