import {useRef, useState} from 'react'
function Form(){
    const nameRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");
  
    function handleFocus(ref){
       ref.current.focus()
    }
  
    return (
      <>
      <form >
        <label >Name: </label>
        <input type="text" placeholder='Enter your Name' ref={nameRef}/>
        <button onClick={() => handleFocus(nameRef)}>Focus Name</button><br />
        <label >Email:</label>
        <input type="email" placeholder='Enter your Email' ref={emailRef}/>
        <button onClick={() => handleFocus(emailRef)}>Focus Email</button><br />
        <label >Password:</label>
        <input type="password" placeholder='Enter your Password' ref={passwordRef} />
        <button onClick={() => handleFocus(passwordRef)}>Focus Password</button>
      </form>
      </>
    )
  
}

export default Form;