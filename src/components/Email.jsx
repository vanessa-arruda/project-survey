import { useState } from "react";

//question 6 - email (add validation)
export const Email = ({value, updateFormData}) => {
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);

    const userEmail = (e) => updateFormData("email", e.target.value);
    const checkEmail = (e) => {
        const str = e.target.value;
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        setIsEmailInvalid(!re.test(str));
    }
    return (
      <form className="email-container">
            <div>
                <p>Glad you made it! You will have an unique and awesome custome! Please type your email and submit the form to receive the result.</p>
            </div>
        <label htmlFor="email-input">Email: </label>
        <input 
            className="email-input"
            id="email-input" 
            type="email"
            value={value}
            onChange={userEmail}
            onBlur={checkEmail}
        />
        {isEmailInvalid && <div className="invalidMsg">Please enter a valid email address</div>}
      </form>
    )
  };