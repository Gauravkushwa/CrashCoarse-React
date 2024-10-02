import './App.css'
import {Route, Routes, Link} from 'react-router-dom'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Products } from './components/Products'
import { useState } from 'react'
import { PrivateRoute } from './components/PrivateRoute'

function App() {

  const [autoToken, setAuthToken] = useState(localStorage.getItem('token'))

  return (
    <>
    <nav>
      <Link className='link' to='/'>Home</Link>
      <Link className='link' to='/about'>About</Link>
      <Link className='link' to='/contact'>Contact</Link>
      <Link className='link' to='/products'>Products</Link>
      <Link className='link' to='/login'>Login</Link>
    </nav>
     <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='/about' element={<About />} />
       <Route path='/contact' element={<Contact />} />
       <Route path='/products' element={
        <PrivateRoute>
          <Products />
        </PrivateRoute>
       } />
       <Route path='/login' element={<Login  setAuthToken={setAuthToken}/>} />
     </Routes>
    </>
  )
}

export default App
