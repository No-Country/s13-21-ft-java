import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Loader from '../components/Loader/Loader'
import { MainLayout } from '../Layouts'

import {
  UsersDataForm,
  OnBoarding,
  Login,
  Register,
  ForgotPassword,
  DashboardUser,
  Deposit,
  Extract,
  VirtualCashier    
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
        element: (
          <Suspense fallback={<Loader />}>
            <UsersDataForm />
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
        path: '/',
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
      },
      {
        path: '/Deposit',
        element: (
          <Suspense fallback={<Loader />}>
            <Deposit />
          </Suspense>
        )
      },
      {
        path: '/Extract',
        element: (
          <Suspense fallback={<Loader />}>
            <Extract />
          </Suspense>
        )
      },
      {
        path: '/VirtualCashier',
        element: (
          <Suspense fallback={<Loader />}>
            <VirtualCashier />
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
