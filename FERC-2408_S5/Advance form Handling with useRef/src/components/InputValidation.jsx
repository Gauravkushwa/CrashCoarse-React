import React, { useState, useRef } from 'react';
function InputValidation(){

      const nameRef = useRef(null);
      const emailRef = useRef(null);
      const passwordRef = useRef(null);
      const [nameValid, setNameValid] = useState(true);
      const [emailValid, setEmailValid] = useState(true);
      const [passwordValid, setPasswordValid] = useState(true);
    
      const validateName = () => {
        setNameValid(nameRef.current.value.length >= 3);
      };
    
      const validateEmail = () => {
        setEmailValid(emailRef.current.value.includes('@'));
      };

      const validatepassword = () =>{
        setPasswordValid(passwordRef.current.value.length >=8);
      }
    
      return (
        <div>
          <form>
            <div>
              <input ref={nameRef} placeholder="Enter Name" onChange={validateName} />
              {!nameValid && <span style={{ color: 'red' }}>Name must be at least 3 characters long</span>}
            </div>
            <div>
              <input ref={emailRef} placeholder="Enter Email" onChange={validateEmail} />
              {!emailValid && <span style={{ color: 'red' }}>Email must include @</span>}
            </div>
            <div>
              <input ref={passwordRef} placeholder="Enter password" onChange={validatepassword} />
              {!passwordValid && <span style={{ color: 'red' }}>password must include @</span>}
            </div>
          </form>
        </div>
      );
    
}

export default InputValidation;