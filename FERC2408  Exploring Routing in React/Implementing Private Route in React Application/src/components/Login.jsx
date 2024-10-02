import { useNavigate, useSearchParams } from 'react-router-dom'
import '../App.css'
import { useState } from 'react'
import axios from 'axios'
export const Login = ({setAuthToken}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async(e)=> {
        e.preventDefault();
            try {
                const response = await axios.post('https://reqres.in/api/login', {
                    
                        "email": "eve.holt@reqres.in",
                        "password": "cityslicka"
                    
                });
                setAuthToken(response.data.token);
                localStorage.setItem('token', response.data.token);
                navigate('/products')
            } catch (error) {
                console.log('Login error', error);
                
            }

    }
    return (
        <>
         <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input type="text"
             placeholder='Enter your Email' 
             value={email} onChange={(e) => setEmail(e.target.value)}
             /><br />
            <label>Password: </label>
            <input type="text"
             placeholder='Enter your Password' 
             value={password} 
             onChange={(e) => setPassword(e.target.value)}
             /><br />
            <button className='submit' type='submit'>Login</button>
         </form>
        </>
    )
}