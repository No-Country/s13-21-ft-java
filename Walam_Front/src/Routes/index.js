import { lazy } from 'react'
const UsersDataForm = lazy(() => import('./UsersDataForm/Component/UsersDataForm'))
const OnBoarding = lazy(() => import('./OnBoarding/Component/OnBoarding'))
const Login = lazy(() => import('./Login/Component/Login'))
const Register = lazy(() => import('./Register/Component/Register'))
const ForgotPassword = lazy(() => import('./ForgotPassword/Component/ForgotPassword'))
const DashboardUser = lazy(() => import('./DashboardUser/Component/DashboardUser'))
const Deposit = lazy(() => import('./Deposit/Component/Deposit'))
const Extract = lazy(() => import('./Extract/Component/Extract'))
const VirtualCashier = lazy(() => import('./VirtualCashier/Component/VirtualCashier'))
// Unprotected Routes
// const Animals = lazy(() => import('./Animals/Component/Animals'))
// const WhoWeAre = lazy(() => import('./WhoWeAre/Component/WhoWeAre'))
// const NotFound = lazy(() => import('./NotFound/Component/NotFound'))
// Protected Routes
// const User = lazy(() => import('./User/Container/User'))
// const MyVolunteers = lazy(() => import('./MyPurchases/Container/MyPurchases'))
// const MyPurchases = lazy(() => import('./MyPurchases/Container/MyPurchases'))

export {
  UsersDataForm,
  OnBoarding,
  Login,
  Register,
  ForgotPassword,
  DashboardUser,
  Deposit,
  Extract,
  VirtualCashier
}
