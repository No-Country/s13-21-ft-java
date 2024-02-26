const LoginLayout = ({ children }) => {
  return (
    <div className=' w-screen flex justify-center py-10 items-center h-screen xl:justify-end xl:pr-[10%] bg-none  xl:bg-login-pattern xl:bg-cover xl:bg-center xl:bg-no-repeat '>
      {children}
    </div>
  )
}
export default LoginLayout
