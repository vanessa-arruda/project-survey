export const StepProgress = ({ currentStep, totalSteps }) => {

    return (
        <p className="stepProgress">{currentStep} of {totalSteps}</p>
    )
}