


const Steps = ({ currentStep }) => {
  return (
    <div className="steps">
        <div className={`step ${currentStep >= 1 ? "active" : ""}`}>

        </div>
    </div>
  )
}

export default Steps;