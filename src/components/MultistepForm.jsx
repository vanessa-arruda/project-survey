import { Name } from "./Name"
import { RadioButton } from "./RadioButton"

export const MultistepForm = () => {
  return (
    <div className="multistep-form-container">
        <div className="multistep-form-paragraphs-container">
            <p>We'll help you set up a creative Halloween Custome this year!
            </p>
            <p className="survey-time">Survey takes: 1-3 minutes</p>
        </div>
        <div className="multistep-form-survey-container">
            <Name/>
        </div>
    </div>
  )
}
