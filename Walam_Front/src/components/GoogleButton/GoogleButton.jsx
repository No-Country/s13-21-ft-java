import { FcGoogle } from 'react-icons/fc'
import { app } from '../../firebase/firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, provider)
  } catch (error) {
    console.error(error)
  }
}

export default function GoogleButton () {
  return (
    <div className='flex flex-col gap-2 text-sm'>
      <button className='flex justify-center rounded items-center bg-neutral-100 item-center border shadow py-2 font-bold' onClick={signInWithGoogle}>
        <FcGoogle className='text-[1.2rem]' />
        <span className='text-center w-9/12 font-roboto'>Continuar con Google</span>
      </button>
    </div>
  )
}
