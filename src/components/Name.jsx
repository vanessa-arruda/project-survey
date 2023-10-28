//question 1 - input text type
export const Name = ({value, updateFormData}) => {

    const userName = (e) => updateFormData("name", e.target.value);

    return (
      <div className="name-container">
            <div className="multistep-form-paragraphs-container">
                <p>We'll help you set up a creative <b>Halloween custome</b> this year!</p>
                <p className="survey-time">Survey takes: 1-2 minutes</p>
            </div>
        <label htmlFor="name-input">Enter your name: </label>
        <input 
            id="name-input" 
            type="text"
            value={value}
            onChange={userName}
        />
      </div>
    )
  };