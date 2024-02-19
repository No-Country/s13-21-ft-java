import { FcGoogle } from 'react-icons/fc'

export default function GoogleButton () {
  return (
    <div className='flex flex-col gap-2 text-sm'>
      <button className='flex justify-center rounded items-center bg-neutral-100 item-center border shadow py-2 font-bold'>
        <FcGoogle className='text-[1.2rem]' />
        <span className='text-center w-9/12 font-roboto'>Continuar con Google</span>
      </button>
    </div>
  )
}
