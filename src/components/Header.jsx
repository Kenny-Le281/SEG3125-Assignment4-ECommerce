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
          <Link className="btn btn-accent d-flex align-items-center gap-2" to="/cart">
            <span aria-hidden="true">🛒</span>
            Cart
            <span className="badge bg-dark text-light">{cartCount}</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
