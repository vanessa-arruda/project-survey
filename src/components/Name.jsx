//question 1 - input text type
import { useState } from "react";
export const Name = ({value, updateFormData}) => {

    const userName = (e) => updateFormData("name", e.target.value);
    console.log(name);

    return (
      <div className="name-container">
            <div className="multistep-form-paragraphs-container">
                <p>We'll help you set up a creative Halloween Custome this year!</p>
                <p className="survey-time">Survey takes: 1-3 minutes</p>
            </div>
        <label htmlFor="name-input">Enter your name: </label>
        <input 
            id="name-input" 
            type="text"
            onChange={userName}
        />
      </div>
    )
  };