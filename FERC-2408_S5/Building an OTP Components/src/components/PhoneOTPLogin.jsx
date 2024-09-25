// import React, { useState } from "react";
import { useState } from "react";
import OtpInput from "./OTPInput";

const PhoneOTPForm = ()=>{
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [ShowOTPInp, setShowOTPInp] = useState(false);

    

    const handleNumberChange = (e)=>{
        setPhoneNumber(e.target.value)

    }    

    const handleFormSubmit = (e)=>{
        e.preventDefault();

               // phone validations

        const regex = /[^0-9]/g;
        if(PhoneNumber.length < 10 || regex.test(PhoneNumber)){
            alert("Invalid Phone Number")
            return;
        }

         // Call back API
         setShowOTPInp(true);
           
    }

    const onOtpSubmit = (otp)=>{
        console.log("LogIn Successful", otp);
        
    }
    return(
        <div>
           {!ShowOTPInp? <form onSubmit={handleFormSubmit}>
            <label>Phone Number:</label>
            <input type="text" placeholder="Enter your PhoneNumber" 
            value={PhoneNumber}
            onChange={handleNumberChange}
            />
            <button type="submit">submit</button>
            </form> : <div>
                <p style={{fontFamily:"sans-serif"}}>OTP send to {PhoneNumber}</p>
                <OtpInput length={6} onOtpSubmit={onOtpSubmit} />
                </div>}
        </div>
    )
}

export default PhoneOTPForm;