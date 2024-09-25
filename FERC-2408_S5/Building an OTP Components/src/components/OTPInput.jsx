// import React, { useRef } from "react";
import { useState, useRef , useEffect } from "react";

const OtpInput = ({length = 6, onOtpSubmit = () =>{}}) =>{

    const [otp, setOtp] = useState(new Array(length).fill(""));
    const inputRefs = useRef([]);

   useEffect(() => {
    if(inputRefs.current[0]){
        inputRefs.current[0].focus()
    }
   }, [])

    // console.log(inputRefs);

    const handleChange = (index, e) =>{
       const value = e.target.value;
       if(isNaN(value)) return;

       const newOtp = [...otp];

          // Allow only one input
        newOtp[index] = value.substring(value.length-1);
        setOtp(newOtp);

          // submit trigger
        const combinedOtp = newOtp.join("");
        if(combinedOtp.length === length) onOtpSubmit(combinedOtp)

            // Move next input field if current input filled;
        if(value && index<length -1 && inputRefs.current[index+1]){
           inputRefs.current[index+1].focus();
        }
    };

    const handleKeyDown =(index, e) =>{
        if(e.key==='Backspace' && !otp[index] && index>0 && inputRefs.current[index-1]){
            inputRefs.current[index - 1].focus();
        }
    }

    const handleClick = (index)=>{
        inputRefs.current[index].setSelectionRange(1, 1);
    }
    
    return <div>
       {otp.map((value, index) =>{
        return <input type="text" ref={(input) => (inputRefs.current[index]=input)}
        key={index} value={value} onChange={(e) => handleChange(index, e)}
        onClick={() => handleClick(index)} onKeyDown={(e)=> handleKeyDown(index, e)}
        className="otpInput"
        />
       })}
    </div>
}

export default OtpInput;