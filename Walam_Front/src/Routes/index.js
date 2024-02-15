import { lazy } from 'react'
const Users = lazy(() => import('./Users/Component/Users'))
const OnBoarding = lazy(() => import('./OnBoarding/Component/OnBoarding'))
const Login = lazy(() => import('./Login/Component/Login'))
// Unprotected Routes
// const Animals = lazy(() => import('./Animals/Component/Animals'))
// const WhoWeAre = lazy(() => import('./WhoWeAre/Component/WhoWeAre'))
// const NotFound = lazy(() => import('./NotFound/Component/NotFound'))
// Protected Routes
// const User = lazy(() => import('./User/Container/User'))
// const MyVolunteers = lazy(() => import('./MyPurchases/Container/MyPurchases'))
// const MyPurchases = lazy(() => import('./MyPurchases/Container/MyPurchases'))

export {
  Users,
  OnBoarding,
  Login
}
