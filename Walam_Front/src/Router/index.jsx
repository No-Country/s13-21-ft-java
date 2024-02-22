import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Loader from '../components/Loader/Loader'
import { MainLayout, UserLayout } from '../Layouts'

import {
  UsersDataForm,
  OnBoarding,
  Login,
  Register,
  ForgotPassword,
  DashboardUser    
} from '../Routes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loader />}>
        <MainLayout />
      </Suspense>
    ),
    // errorElement: <NotFound />,
    children: [
      // {
      //   index: true,
      //   element: (
      //     <Suspense fallback={<Loader />}>
      //       <Users />
      //     </Suspense>
      //   )
      // },
      {
        path: '/UsersDataForm',
        element: <UsersDataForm />
      },
      {
        path: '/Register',
        element: <Register />
      },            
      {
        path: '/',
        element: <OnBoarding />
      },
      {
        path: '/Login',
        element: <Login />
      },
      {
        path: '/ForgotPassword',
        element: <ForgotPassword />
      },
      {
      path: '/',
      element: (
        <Suspense fallback={<Loader />}>
          <UserLayout />
        </Suspense>
      ),
      children: [
        {
          path: '/DashboardUser',
          element: <DashboardUser />
        }
      ]
      }
      
      // {
      //   path: '/Reset-password',
      //   element: (
      //     <Suspense fallback={<Loader />}>
      //       <ResetPassword />
      //     </Suspense>
      //   )
      // }

    ]
  }
])

/*
if you wants to add a new route please create a new component
on the  routes file ./Routes

then

add a new object with the path and element properties

    {
        path: '',
        element: <>
      },

      inside the children propertie.
*/
