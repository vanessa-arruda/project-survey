//question 6 - email (add validation)
export const Email = ({value, updateFormData}) => {

    const userEmail = (e) => updateFormData("email", e.target.value);
    const checkEmail = (e) => {
        const str = e.target.value;
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(str))
        alert("Please enter a valid email address");
    }
    return (
      <div className="email-container">
            <div>
                <p>Glad you made it! You will have an unique and awesome custome! Please type your email and submit the form to receive the result.</p>
            </div>
        <label htmlFor="email-input">Email: </label>
        <input 
            id="email-input" 
            type="email"
            value={value}
            onChange={userEmail}
            onBlur={checkEmail}
        />
      </div>
    )
  };