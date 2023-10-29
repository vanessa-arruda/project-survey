import { useState } from "react";
import { Name } from "./Name";
import { Character } from "./Character";
import { ScaryLevel } from "./ScaryLevel";
import { HeadItem } from "./HeadItem";
import { FaceItem } from "./FaceItem";
import { Email } from "./Email";
import { StepProgress } from './stepProgress';

//Define the MulstiStep component
export const MultistepForm = () => {
    //state to store form data
    const [formData, setFormData] = useState(
        {
            name: "",
            characterData: "",
            scaryLevel: "",
            headItem: "",
            faceItem: "",
            email: "",
        }
    );
    //state to track the current step in the form (previous x next buttons)
    const [currentStep, setCurrentStep] = useState(1);

    //const to update the values of the object above. "...values".
    const updateFormData = (field, value) => {
        setFormData((values) => ({...values, [field] : value}));
    }

    const nextStep = () =>  {
        if(currentStep < 6) {
            setCurrentStep(currentStep +1);
        }
    }

    const previousStep = () => {
        if(currentStep > 1) {
            setCurrentStep(currentStep -1);
        }
    }

    const submitForm = () => {

        const submittedData = `
        Name: ${formData.name}
        Type of costume: ${formData.characterData}
        ${formData.characterData === "Zombie" ? `Scary Level: ${formData.scaryLevel}` : ``}${formData.characterData === "Ghost" ? `Head accessory: ${formData.headItem}` : ``}
        Face accesorry: ${formData.faceItem}
        Email: ${formData.email}
        `
        alert(submittedData);
    }
    console.log(formData);
  return (<>
    <div className="multistep-form-container">
        <div className="multistep-form-survey-container">
            {/* render the Name component if on step 1 and so on*/}
           {currentStep === 1 && (
           <Name value={formData.name} updateFormData={updateFormData}/>
           )}
           {currentStep === 2 && (
           <Character name={formData.name} value={formData.characterData} updateFormData={updateFormData}/>
           )}
           {currentStep === 3 && (
            <>
                {formData.characterData === "Zombie" && (
                    <ScaryLevel value={formData.scaryLevel} updateFormData={updateFormData} />
                )}
                {formData.characterData === "Ghost" && (
                    <HeadItem value={formData.headItem} updateFormData={updateFormData} />
                )}
            </>
           )}
            {currentStep === 4 && (
            <FaceItem value={formData.faceItem} updateFormData={updateFormData}/>
           )}
            {currentStep === 5 && (
            <Email value={formData.email} updateFormData={updateFormData}/>
           )}
        </div>
            
        {/* handle the buttons next, previous and submit*/}
        <div className="multistep-form-buttons-container">
            {currentStep > 1 && (
                <button onClick={previousStep} className="back-btn">Back</button>
            )}
            {currentStep < 5 ?
                <button onClick={nextStep} className="next-btn">Next</button> : <button onClick={submitForm} className="submit-btn">Submit</button>
            }
        </div>
    </div>
    <StepProgress currentStep={currentStep} totalSteps={5} />
    </>
  )
};
