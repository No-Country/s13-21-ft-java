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
  DashboardUser,
  Deposit,
  Extract,
<<<<<<< HEAD
  VirtualCashier
=======
  VirtualCashier,
  Transfer,
  ConfirmTransfer
>>>>>>> 6bd9ce11d4c43be7734f8632da4808d9901c2ccb
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
        element: (
          <Suspense fallback={<Loader />}>
            <Register />
          </Suspense>
        )
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
<<<<<<< HEAD
          }
=======
          },
          {
            path: '/Transfer',
            element: <Transfer />
          },
          {
            path: '/ConfirmTransfer',
            element: <ConfirmTransfer />
          }

>>>>>>> 6bd9ce11d4c43be7734f8632da4808d9901c2ccb
        ]
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
