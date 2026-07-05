import { useState } from 'react'
import { Link } from 'react-router-dom'

function Survey({ compact = false }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    rating: '5',
    easyToUse: 'Yes',
    shoppingFor: '',
    comment: '',
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  if (submitted) {
    return (
      <section className={compact ? 'border-top border-secondary pt-4 mt-4 text-start' : 'glass-panel p-5 rounded-4 text-center'}>
        <p className="text-uppercase fw-semibold text-accent mb-2">Thanks for sharing</p>
        <h2 className="h3 mb-3">Your feedback helps us improve.</h2>
        <p className="text-light-emphasis mb-4">We appreciate your thoughts and will use them to build a better shopping experience for your next setup.</p>
        <Link className="btn btn-accent" to="/">Back to home</Link>
      </section>
    )
  }

  return (
    <section className={compact ? 'border-top border-secondary pt-4 mt-4 text-start' : 'glass-panel p-4 rounded-4'}>
      <p className="text-uppercase fw-semibold text-accent mb-2">Tell us how TechHub did</p>
      <h2 className={compact ? 'h5 mb-2' : 'h3 mb-3'}>Help us improve your next setup.</h2>
      <p className="text-light-emphasis mb-4">Your feedback helps us build a better shopping experience for students, gamers, and remote workers.</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label fw-semibold">Overall rating</label>
          <select id="rating" name="rating" className="form-select" value={form.rating} onChange={handleChange}>
            <option value="1">1 - Needs work</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label fw-semibold">Was the site easy to use?</label>
          <div className="d-flex gap-3">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="easyToUse" id="easyYes" value="Yes" checked={form.easyToUse === 'Yes'} onChange={handleChange} />
              <label className="form-check-label" htmlFor="easyYes">Yes</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="easyToUse" id="easyNo" value="No" checked={form.easyToUse === 'No'} onChange={handleChange} />
              <label className="form-check-label" htmlFor="easyNo">No</label>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="shoppingFor" className="form-label fw-semibold">What were you shopping for?</label>
          <input id="shoppingFor" name="shoppingFor" className="form-control" value={form.shoppingFor} onChange={handleChange} placeholder="Keyboard, light, webcam, or setup upgrade" />
        </div>
        <div className="mb-3">
          <label htmlFor="comment" className="form-label fw-semibold">Optional comment</label>
          <textarea id="comment" name="comment" className="form-control" rows="4" value={form.comment} onChange={handleChange} placeholder="Tell us what worked well or what you would change."></textarea>
        </div>
        <button className="btn btn-accent" type="submit">Submit feedback</button>
      </form>
    </section>
  )
}

export default Survey
