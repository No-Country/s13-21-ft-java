import { lazy } from 'react'
const Users = lazy(() => import('./Users/Component/Users'))
const Register = lazy(() => import('./Register/Component/Register'))
const Register2 = lazy(() => import('./Register2/Component/Register2'))
const UsersData = lazy(() => import('./UsersData/Component/UsersData'))
const UsersData2 = lazy(() => import('./UsersData2/Component/UsersData2'))
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
  Register,
  Register2,
  UsersData,
  UsersData2
}
