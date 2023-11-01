//question 1 - input text type
export const Name = ({value, updateFormData}) => {

    const userName = (e) => updateFormData("name", e.target.value);

    return (
      <div className="name-container">
            <div className="multistep-form-paragraphs-container">
                <h2>We'll help you set up a creative <b>Halloween costume</b> this year!</h2>
                <p className="survey-time">Survey takes: 1-2 minutes</p>
            </div>
            <div className="name-input-label-container">
                <label className="questions label-name">Enter your name: 
                <input
                    type="text"
                    value={value}
                    onChange={userName}
                /></label>
            </div>
      </div>
    )
  };