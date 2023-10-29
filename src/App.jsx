// Project BASIC Requirements:
// 1. Survey should consist of at least 3 questions.
// 2. At least one question should use radio buttons.
// 3. At least one question should use a select dropdown.
// 4. There should be a submit button. When pressed your app should hide the input form and show a summary of the user's submissions.
// 5. Your page should be responsive

// INTERMEDIATE Stretch Goals
// 1. Use a form element you haven't tried before (range slider)
// 2. Add validation to your survey! Use either HTML input validation attributes (such as required) 
// or implement custom logic when the user clicks the submit button to make the form fields have validations.
// If you choose to implement your own validation, you should also make sure to show error messages in a nice way.
// 3. Create a button that, when clicked, will scroll down to the top of the next question in the survey (if possible)

// ADVANCED Stretch Goals
// 1. Visualize to the user how far through the survey they are, and how much is left, by creating a progress bar
// 3. Use Regex validation for some input on your survey
// 4. Show different questions depending on the answer to a specific question ??should we do? no additional questions added above.
// 5. Create a multi-step form.

import { MultistepForm } from "./components/MultistepForm"
import { Header } from "./components/Header"

export const App = () => {
  
  return (
    <div>
        <Header/>
      <section className="app-container">
          <div className="appContent">
            <h1 className="survey-title">Your Halloween Costume Creator</h1>
            <MultistepForm/>
          </div>
          
      </section>
    </div>
  )

};
