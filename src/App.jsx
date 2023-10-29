import { MultistepForm } from "./components/MultistepForm"
import { Header } from "./components/Header"

export const App = () => {
  
  return (
    <div>
        <Header/>
      <section className="app-container">
          <div className="survey-container">
            <h1 className="survey-title">Your Halloween Costume Creator</h1>
            <MultistepForm/>
          </div>
          
      </section>
    </div>
  )

};
