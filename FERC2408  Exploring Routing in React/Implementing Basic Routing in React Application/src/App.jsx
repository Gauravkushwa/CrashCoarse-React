import { Route, Routes, Link } from 'react-router-dom';
import './App.css'
import {Home} from './components/Home';
import {Users} from './components/Users';
import {Login} from './components/Login';

function App() {

  return (
    <>
     <nav>
      <Link to='/'>Home</Link>
      <Link to='/users'>Users</Link>
      <Link to='/login'>Login</Link>
     </nav>
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/users' element={<Users />} />
       <Route path='/login' element={<Login />} />
     </Routes>
    </>
  )
}

export default App;
