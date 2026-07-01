import { Link } from 'react-router-dom'
import keyboardImage from '../assets/keyboard1.jpg'
import mouseImage from '../assets/mouse1.jpg'
import headsetImage from '../assets/headset1.jpg'
import controllerImage from '../assets/controller1.jpg'

function Home() {
  const featuredCategories = [
    { name: 'Keyboard', image: keyboardImage },
    { name: 'Mouse', image: mouseImage },
    { name: 'Headset', image: headsetImage },
    { name: 'Controller', image: controllerImage },
  ]

  return (
    <main>
      <aside className="promo-bar rounded-3 px-4 py-3 mb-3 text-center" aria-label="Current promotion">
        <strong>Save 15% + free shipping on orders $99+</strong>
      </aside>

      <section className="hero-section rounded-4 p-4 p-lg-5 shadow-sm">
        <div className="row align-items-center g-4">
          <div className="col-12 hero-copy">
            <p className="text-uppercase fw-semibold text-accent mb-3">Limited-time setup deals!</p>
            <h1 className="display-4 fw-bold mb-3">Build your perfect desk setup with TechHub.</h1>
            <p className="lead text-light-emphasis mb-4">
              Discover premium keyboards, mice, headsets, webcams, and desk accessories that help you work, play, and stream with ease.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Link className="btn btn-accent btn-lg" to="/shop">
                Shop the deal
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <p className="text-uppercase fw-semibold text-accent mb-1">Shop by category</p>
            <h2 className="h3 mb-0">Find accessories that fit your setup.</h2>
          </div>
        </div>
        <div className="row g-3">
          {featuredCategories.map((category) => (
            <div className="col-6 col-md-3" key={category.name}>
              <div className="category-card category-card-large p-4 rounded-4 h-100 text-center">
                <img
                  src={category.image}
                  alt={`${category.name} accessories`}
                  className="category-image img-fluid rounded-3 mb-3 w-100"
                  loading="lazy"
                />
                <h3 className="h6 fw-semibold">{category.name}</h3>
                <p className="small text-light-emphasis mb-0">Curated picks for your workspace.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-5">
        <div className="info-card p-4 rounded-4">
          <p className="text-uppercase fw-semibold text-accent mb-2">Why TechHub?</p>
          <h2 className="h3 mb-3">Helpful gear, clear choices, and a smoother shopping experience.</h2>
          <p className="text-light-emphasis mb-3">
            From studying at home to streaming after class, TechHub helps you find the right accessories for your routine. Every product includes compatibility, connection type, and stock details so you can decide with confidence.
          </p>
          <div className="row g-3">
            <div className="col-md-4">
              <div className="p-3 rounded-3 bg-dark-subtle">
                <strong>Fast picks</strong>
                <p className="small text-light-emphasis mb-0">Find your next accessory in minutes.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 rounded-3 bg-dark-subtle">
                <strong>Simple filters</strong>
                <p className="small text-light-emphasis mb-0">Narrow by brand, price, and device.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 rounded-3 bg-dark-subtle">
                <strong>Easy checkout</strong>
                <p className="small text-light-emphasis mb-0">Move from cart to confirmation in a few steps.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
