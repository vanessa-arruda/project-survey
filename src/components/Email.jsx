//question 6 - email (add validation)
export const Email = ({value, updateFormData}) => {

    const userEmail = (e) => updateFormData("email", e.target.value);

    return (
      <div className="email-container">
            <div>
                <p>Please type your email and submit the form to receive the result.</p>
            </div>
        <label htmlFor="email-input">Email: </label>
        <input 
            id="email-input" 
            type="email"
            value={value}
            onChange={userEmail}
        />
      </div>
    )
  };