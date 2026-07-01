function CheckoutStepper({ step }) {
  const steps = ['Cart', 'Information', 'Payment', 'Review', 'Confirmation']

  return (
    <div className="mb-4">
      <div className="d-flex flex-wrap gap-2 justify-content-between">
        {steps.map((label, index) => {
          const stepNumber = index + 1
          const isCompleted = stepNumber < step
          const isCurrent = stepNumber === step

          return (
            <div key={label} className={`step-pill flex-grow-1 text-center py-2 px-3 rounded-pill ${isCompleted ? 'completed' : isCurrent ? 'current' : ''}`}>
              <span className="fw-semibold">{stepNumber}. {label}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CheckoutStepper
