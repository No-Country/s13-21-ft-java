import { lazy } from 'react'
const Users = lazy(() => import('./Users/Component/Users'))
const OnBoarding = lazy(() => import('./OnBoarding/Component/OnBoarding'))
const Login = lazy(() => import('./Login/Component/Login'))
const Register = lazy(() => import('./Register/Component/Register'))
const Register2 = lazy(() => import('./Register2/Component/Register2'))
const UsersData = lazy(() => import('./UsersData/Component/UsersData'))
const UsersData2 = lazy(() => import('./UsersData2/Component/UsersData2'))
const ForgotPassword = lazy(() => import('./ForgotPassword/Component/ForgotPassword'))
const DashboardUser = lazy(() => import('./DashboardUser/Component/DashboardUser'))
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
  Login,
  Register,
  Register2,
  UsersData,
  UsersData2,
  ForgotPassword,
  DashboardUser
}
