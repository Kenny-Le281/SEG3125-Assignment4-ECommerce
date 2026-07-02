import { NavLink, Link } from 'react-router-dom'

function Header({ cartCount }) {
  const navLinkClass = ({ isActive }) =>
    `nav-link px-3 py-2 rounded-pill ${isActive ? 'active-nav' : ''}`

  return (
    <header className="sticky-top shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-dark px-3 px-lg-4 py-3">
        <Link className="navbar-brand fw-bold fs-3 me-4" to="/">
          <span className="text-accent">TechHub</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/shop">
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/survey">
                Survey
              </NavLink>
            </li>
          </ul>
          <Link className="cart-link" to="/cart" aria-label={`View cart with ${cartCount} items`}>
            <span className="cart-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M3 4h2l2.2 10.1a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 1.9-1.4L21 8H7" />
                <circle cx="10" cy="19" r="1.3" />
                <circle cx="18" cy="19" r="1.3" />
              </svg>
            </span>
            <span className="cart-label">Cart</span>
            <span className="cart-count">{cartCount}</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
