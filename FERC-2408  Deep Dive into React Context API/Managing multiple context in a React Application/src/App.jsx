
import './App.css'
import { ThemeProvider } from './context/ThemeContext'

import { UserProvider } from './context/UserContext';
import HomePage from './component/HomePage';

function App() {


  return (
    <>
     <h1>Managing multiple context in React Application</h1>
     <ThemeProvider>
        <UserProvider>
           <HomePage/>
        </UserProvider>
     </ThemeProvider>
    </>
  )
}

export default App;
