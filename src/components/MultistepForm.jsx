import { useState } from "react";
import { Name } from "./Name";
import { Character } from "./Character";

//Define the MulstiStep component
export const MultistepForm = () => {
    //state to store form data
    const [formData, setFormData] = useState({
        name: "",
        characterData: "",
        scaryLevel: "",
        headItem: "",
        faceItem: "",
        email: "",
    });

    //state to track the current step in the form (previous x next buttons)
    const [currentStep, setCurrentStep] = useState(1);

    //const to update the values of the object above. "...values".
    const updateFormData = (field, value) => {
        setFormData((values) => ({...values, [field]:value}));
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
        Scary Level: ${formData.scaryLevel}
        Head accessory: ${formData.headItem}
        Face accesorry: ${formData.faceItem}
        Email: ${email}
        `
        alert(submittedData);
    }
  return (
    <div className="multistep-form-container">
        <div className="multistep-form-survey-container">
            {/* render the Name component if on step 1 and so on*/}
           {currentStep === 1 && (
           <Name value={formData.name} updateFormData={updateFormData}/>
           )}
           {currentStep === 2 && (
           <Character value={formData.characterData} updateFormData={updateFormData}/>
           )}
           {currentStep === 3 && (
            <scaryLevel value={formData.scaryLevel} updateFormData={updateFormData}/>
           )}
            {currentStep === 4 && (
            <HeadItem value={formData.headItem} updateFormData={updateFormData}/>
           )}
            {currentStep === 5 && (
            <FaceItem value={formData.faceItem} updateFormData={updateFormData}/>
           )}
            {currentStep === 6 && (
            <Email value={formData.email} updateFormData={updateFormData}/>
           )}
        </div>

        <div className="multistep-form-buttons-container">
            {currentStep > 1 && (
                <button onClick={previousStep}>Back</button>
            )}
            {currentStep < 6 ?
                <button onClick={nextStep}>Next</button> : <button onCLick={submitForm}>Submit</button>
            }
        </div>
    </div>
  )
};
