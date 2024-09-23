import React, { useRef } from 'react';
const FormSubmission = ()=>{

      const nameRef = useRef(null);
      const emailRef = useRef(null);
      const passwordRef = useRef(null);
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const formData = {
          name: nameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
        };
    
        if (formData.name && formData.email.includes('@')) {
          console.log('Form submitted:', formData);
        } else {
          console.log('Invalid input');
        }
      };
    
      return (
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <input ref={nameRef} placeholder="Enter Name" />
            </div>
            <div>
              <input ref={emailRef} placeholder="Enter Email" />
            </div>
            <div>
              <input ref={passwordRef} placeholder="Enter Password" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    
}

export default FormSubmission;