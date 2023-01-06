import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth' 
import { auth } from '../firbase-config'
const Nav = ({isAuth,setIsAuth}) => {

const navigate = useNavigate()

const SignOut = () => {
    signOut(auth).then(()=>{
        localStorage.clear();
        setIsAuth(false);
        navigate("/login")
    })
}

  return (
    <nav className='bg-white shadow-lg py-4 grid content-center m-auto fixed top-0 w-full'>
        <ul className='flex items-center justify-center space-x-4 '>
            <li className='hover:font-serif '>
                <Link to='/'>Home</Link>
            </li>
           {isAuth && <li className='hover:font-serif '>
                <Link to='/creatpost'>Create Post</Link>
            </li>}
            <li className='hover:font-serif '>
               {!isAuth ? <Link to='/login' className='text-blue-600'>Register User</Link> : <button onClick={SignOut} className="text-red-600">Log Out</button>
}            </li>
        </ul>
    </nav>
  )
}

export default Nav