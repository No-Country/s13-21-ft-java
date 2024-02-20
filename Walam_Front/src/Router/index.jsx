import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Loader from '../components/Loader/Loader'
import { MainLayout } from '../Layouts'

import {
  Users,
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
        path: '/Users',
        element: (
          <Suspense fallback={<Loader />}>
            <Users />
          </Suspense>
        )
      },
      {
        path: '/Register',
        element: (
          <Suspense fallback={<Loader />}>
            <Register />
          </Suspense>
        )
      },            
      {
        path: '/OnBoarding',
        element: (
          <Suspense fallback={<Loader />}>
            <OnBoarding />
          </Suspense>
        )
      },
      {
        path: '/Login',
        element: (
          <Suspense fallback={<Loader />}>
            <Login />
          </Suspense>
        )
      },
      {
        path: '/ForgotPassword',
        element: (
          <Suspense fallback={<Loader />}>
            <ForgotPassword />
          </Suspense>
        )
      },
      {
        path: '/DashboardUser',
        element: (
          <Suspense fallback={<Loader />}>
            <DashboardUser />
          </Suspense>
        )
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
