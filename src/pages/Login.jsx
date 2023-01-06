import React from 'react'
import {FaGoogle} from 'react-icons/fa'
import { auth,provider } from '../firbase-config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
// import  login  from '../assets/login.png'
const Login = ({setIsAuth}) => {
  let navigate = useNavigate();
  const SignInWithGoogle = () =>{
    signInWithPopup(auth,provider).then((result)=>{
      localStorage.setItem("isAuth", true)
      navigate("/")
      setIsAuth(true)
    })
  }
  return (
    <div className='px-36 mt-60 flex items-center justify-center flex-col gap-4'>
      <img src="../../login.png" alt="login png"  className='w-72'/>
      <h2>Sign In With Google To Continue</h2>
      <button className='bg-sky-500 text-white py-2 px-3 flex items-center rounded shadow-md shadow-gray-800' onClick={SignInWithGoogle}>Sign In With Google <span className='text-red-600 pl-2 '><FaGoogle/></span> </button>
    </div>
  )
}

export default Login;