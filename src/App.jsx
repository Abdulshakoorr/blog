import React, { useState } from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Nav from './components/Nav'
import CreatePost from './pages/CreatePost'
import Home from './pages/Home'
import Login from './pages/Login'
const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))
  return (
    <BrowserRouter>
    <Nav isAuth={isAuth} setIsAuth = {setIsAuth}/>
      <Routes>
        <Route path='/' element={<Home isAuth = {isAuth}/>}/>
        <Route path='/creatpost' element={<CreatePost isAuth = {isAuth}/>}/>
        <Route path='/login' element={<Login setIsAuth = {setIsAuth}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App