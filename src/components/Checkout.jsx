import { useState } from 'react'
import CheckoutStepper from './CheckoutStepper'
import Survey from './Survey'

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  province: '',
  postalCode: '',
  cardName: '',
  cardNumber: '',
  expiry: '',
  cvv: '',
  billingSameAsShipping: true,
  billingAddress: '',
}

function Checkout({ cartItems, onCompleteCheckout }) {
  const [step, setStep] = useState(2)
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setForm((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const validateInfo = () => {
    const nextErrors = {}
    if (!form.fullName.trim()) nextErrors.fullName = 'Please enter your full name.'
    if (!form.email.trim()) nextErrors.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Please enter a valid email address.'
    if (!form.phone.trim()) nextErrors.phone = 'Please enter your phone number.'
    if (!form.address.trim()) nextErrors.address = 'Please enter your shipping address.'
    if (!form.city.trim()) nextErrors.city = 'Please enter your city.'
    if (!form.province.trim()) nextErrors.province = 'Please enter your province.'
    if (!form.postalCode.trim()) nextErrors.postalCode = 'Please enter your postal code.'

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const validatePayment = () => {
    const nextErrors = {}
    if (!form.cardName.trim()) nextErrors.cardName = 'Please enter the cardholder name.'
    if (!form.cardNumber.trim()) nextErrors.cardNumber = 'Please enter the card number.'
    else if (!/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(form.cardNumber)) nextErrors.cardNumber = 'Use a fake card number in the format 0000 0000 0000 0000.'
    if (!form.expiry.trim()) nextErrors.expiry = 'Please enter the expiry date.'
    if (!form.cvv.trim()) nextErrors.cvv = 'Please enter the CVV.'

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleNext = () => {
    if (step === 2) {
      if (validateInfo()) setStep(3)
      return
    }

    if (step === 3) {
      if (validatePayment()) setStep(4)
      return
    }

    if (step === 4) {
      setStep(5)
      onCompleteCheckout()
    }
  }

  const handleBack = () => {
    if (step > 2) setStep(step - 1)
  }

  const renderInfoStep = () => (
    <div className="glass-panel p-4 rounded-4">
      <p className="text-uppercase fw-semibold text-accent mb-2">Step 2 of 5</p>
      <h2 className="h3 mb-3">Your information</h2>
      <p className="text-light-emphasis mb-4">We use your details to prepare your order and confirm your setup shipment.</p>
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label" htmlFor="fullName">Full name</label>
          <input id="fullName" name="fullName" className={`form-control ${errors.fullName ? 'is-invalid' : ''}`} value={form.fullName} onChange={handleChange} />
          {errors.fullName && <div className="invalid-feedback d-block">{errors.fullName}</div>}
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} value={form.email} onChange={handleChange} />
          {errors.email && <div className="invalid-feedback d-block">{errors.email}</div>}
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="phone">Phone number</label>
          <input id="phone" name="phone" className={`form-control ${errors.phone ? 'is-invalid' : ''}`} value={form.phone} onChange={handleChange} />
          {errors.phone && <div className="invalid-feedback d-block">{errors.phone}</div>}
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="address">Shipping address</label>
          <input id="address" name="address" className={`form-control ${errors.address ? 'is-invalid' : ''}`} value={form.address} onChange={handleChange} />
          {errors.address && <div className="invalid-feedback d-block">{errors.address}</div>}
        </div>
        <div className="col-md-4">
          <label className="form-label" htmlFor="city">City</label>
          <input id="city" name="city" className={`form-control ${errors.city ? 'is-invalid' : ''}`} value={form.city} onChange={handleChange} />
          {errors.city && <div className="invalid-feedback d-block">{errors.city}</div>}
        </div>
        <div className="col-md-4">
          <label className="form-label" htmlFor="province">Province</label>
          <input id="province" name="province" className={`form-control ${errors.province ? 'is-invalid' : ''}`} value={form.province} onChange={handleChange} />
          {errors.province && <div className="invalid-feedback d-block">{errors.province}</div>}
        </div>
        <div className="col-md-4">
          <label className="form-label" htmlFor="postalCode">Postal code</label>
          <input id="postalCode" name="postalCode" className={`form-control ${errors.postalCode ? 'is-invalid' : ''}`} value={form.postalCode} onChange={handleChange} />
          {errors.postalCode && <div className="invalid-feedback d-block">{errors.postalCode}</div>}
        </div>
      </div>
    </div>
  )

  const renderPaymentStep = () => (
    <div className="glass-panel p-4 rounded-4">
      <p className="text-uppercase fw-semibold text-accent mb-2">Step 3 of 5</p>
      <h2 className="h3 mb-3">Secure payment</h2>
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label" htmlFor="cardName">Cardholder name</label>
          <input id="cardName" name="cardName" className={`form-control ${errors.cardName ? 'is-invalid' : ''}`} value={form.cardName} onChange={handleChange} />
          {errors.cardName && <div className="invalid-feedback d-block">{errors.cardName}</div>}
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="cardNumber">Card number</label>
          <input id="cardNumber" name="cardNumber" className={`form-control ${errors.cardNumber ? 'is-invalid' : ''}`} placeholder="0000 0000 0000 0000" value={form.cardNumber} onChange={handleChange} />
          {errors.cardNumber && <div className="invalid-feedback d-block">{errors.cardNumber}</div>}
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="expiry">Expiry date</label>
          <input id="expiry" name="expiry" className={`form-control ${errors.expiry ? 'is-invalid' : ''}`} placeholder="MM/YY" value={form.expiry} onChange={handleChange} />
          {errors.expiry && <div className="invalid-feedback d-block">{errors.expiry}</div>}
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="cvv">CVV</label>
          <input id="cvv" name="cvv" className={`form-control ${errors.cvv ? 'is-invalid' : ''}`} value={form.cvv} onChange={handleChange} />
          {errors.cvv && <div className="invalid-feedback d-block">{errors.cvv}</div>}
        </div>
        <div className="col-12">
          <div className="form-check billing-checkbox rounded-3">
            <input id="billingSameAsShipping" className="form-check-input" type="checkbox" name="billingSameAsShipping" checked={form.billingSameAsShipping} onChange={handleChange} />
            <label className="form-check-label" htmlFor="billingSameAsShipping">Billing address is the same as shipping</label>
          </div>
        </div>
        {!form.billingSameAsShipping && (
          <div className="col-12">
            <label className="form-label" htmlFor="billingAddress">Billing address</label>
            <input id="billingAddress" name="billingAddress" className="form-control" value={form.billingAddress} onChange={handleChange} />
          </div>
        )}
      </div>
    </div>
  )

  const renderReviewStep = () => (
    <div className="glass-panel p-4 rounded-4">
      <p className="text-uppercase fw-semibold text-accent mb-2">Step 4 of 5</p>
      <h2 className="h3 mb-3">Review your order</h2>
      <div className="d-flex flex-column gap-2 mb-4">
        {cartItems.map((item) => (
          <div key={item.id} className="d-flex justify-content-between align-items-center border-bottom border-secondary pb-2">
            <span>{item.name} × {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-between fw-bold fs-5">
        <span>Total</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <p className="text-light-emphasis mt-3 mb-0">You’ll receive a confirmation message once everything is confirmed.</p>
    </div>
  )

  const renderConfirmationStep = () => (
    <div className="glass-panel p-4 rounded-4 text-center">
      <p className="text-uppercase fw-semibold text-accent mb-2">Step 5 of 5</p>
      <h2 className="h3 mb-3">Your setup is on the way!</h2>
      <p className="text-light-emphasis mb-4">Thanks for shopping with TechHub. Your order is confirmed and we hope your new gear upgrades your day.</p>

      <div className="mt-4 text-start">
        <Survey compact />
      </div>

    </div>
  )

  return (
    <section>
      <CheckoutStepper step={step} />
      {step === 2 && renderInfoStep()}
      {step === 3 && renderPaymentStep()}
      {step === 4 && renderReviewStep()}
      {step === 5 && renderConfirmationStep()}

      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-outline-light" onClick={handleBack} disabled={step === 2}>
          Back
        </button>
        {step < 5 && (
          <button className="btn btn-accent" onClick={handleNext}>
            {step === 4 ? 'Confirm order' : 'Continue'}
          </button>
        )}
      </div>
    </section>
  )
}

export default Checkout
