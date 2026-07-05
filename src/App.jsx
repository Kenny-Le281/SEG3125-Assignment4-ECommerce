import { useMemo, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import ProductCard from './components/ProductCard'
import ProductDetails from './components/ProductDetails'
import Filters from './components/Filters'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Survey from './components/Survey'
import FAQ from './components/FAQ'
import products from './data/products'
import './App.css'

function AppContent() {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [filters, setFilters] = useState({
    search: '',
    category: 'All',
    brand: 'All',
    price: 'All',
    colour: 'All',
    connectionType: 'All',
    compatibility: 'All',
    useCase: 'All',
    rating: '0',
  })
  const [sortBy, setSortBy] = useState('featured')

  const addToCart = (product) => {
    setCartItems((current) => {
      const existingItem = current.find((item) => item.id === product.id)
      if (existingItem) {
        return current.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...current, { ...product, quantity: 1 }]
    })
  }

  const updateQuantity = (productId, nextQuantity) => {
    setCartItems((current) =>
      current
        .map((item) => (item.id === productId ? { ...item, quantity: nextQuantity } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const removeItem = (productId) => {
    setCartItems((current) => current.filter((item) => item.id !== productId))
  }

  const handleFilterChange = (name, value) => {
    setFilters((current) => ({ ...current, [name]: value }))
  }

  const clearFilters = () => {
    setFilters({
      search: '',
      category: 'All',
      brand: 'All',
      price: 'All',
      colour: 'All',
      connectionType: 'All',
      compatibility: 'All',
      useCase: 'All',
      rating: '0',
    })
    setSortBy('featured')
  }

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const matchesSearch = [product.name, product.description, product.category, product.brand]
        .join(' ')
        .toLowerCase()
        .includes(filters.search.toLowerCase())

      const matchesCategory = filters.category === 'All' || product.category === filters.category
      const matchesBrand = filters.brand === 'All' || product.brand === filters.brand
      const matchesColour = filters.colour === 'All' || product.colour === filters.colour
      const matchesConnection = filters.connectionType === 'All' || product.connectionType === filters.connectionType
      const matchesCompatibility = filters.compatibility === 'All' || product.compatibility.includes(filters.compatibility)
      const matchesUseCase = filters.useCase === 'All' || product.useCase === filters.useCase
      const matchesRating = Number(product.rating) >= Number(filters.rating)

      let matchesPrice = true
      if (filters.price === 'under50') matchesPrice = product.price < 50
      if (filters.price === '50to100') matchesPrice = product.price >= 50 && product.price <= 100
      if (filters.price === 'over100') matchesPrice = product.price > 100

      return matchesSearch && matchesCategory && matchesBrand && matchesColour && matchesConnection && matchesCompatibility && matchesUseCase && matchesRating && matchesPrice
    })

    const sorted = [...result]
    sorted.sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      if (sortBy === 'rating') return b.rating - a.rating
      if (sortBy === 'newest') return new Date(b.dateAdded) - new Date(a.dateAdded)
      return 0
    })

    return sorted
  }, [filters, sortBy])

  return (
    <div className="app-shell">
      <Header cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} />
      <div className="container py-4 py-lg-5">
        <Routes>
          <Route
            path="/"
            element={<Home onSelectCategory={(category) => handleFilterChange('category', category)} />}
          />
          <Route
            path="/shop"
            element={
              <div>
                <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center mb-4 gap-3">
                  <div>
                    <p className="text-uppercase fw-semibold text-accent mb-1">Shop</p>
                    <h1 className="h2 mb-0">Browse accessories that fit your setup.</h1>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <label htmlFor="sort" className="form-label mb-0 fw-semibold">Sort</label>
                    <select id="sort" className="form-select" value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
                      <option value="featured">Featured</option>
                      <option value="price-asc">Price: low to high</option>
                      <option value="price-desc">Price: high to low</option>
                      <option value="rating">Highest rated</option>
                      <option value="newest">Newest</option>
                    </select>
                  </div>
                </div>
                <div className="row g-4">
                  <div className="col-lg-3">
                    <Filters
                      filters={filters}
                      onFilterChange={handleFilterChange}
                      onClearFilters={clearFilters}
                      resultCount={filteredProducts.length}
                      productsCount={products.length}
                    />
                  </div>
                  <div className="col-lg-9">
                    {filteredProducts.length === 0 ? (
                      <div className="empty-state p-5 rounded-4 text-center">
                        <h2 className="h4">No products match your filters.</h2>
                        <p className="text-light-emphasis mb-4">Try broadening your search or clear everything to view the full collection.</p>
                        <button className="btn btn-accent" onClick={clearFilters}>Clear filters</button>
                      </div>
                    ) : (
                      <div className="row g-4">
                        {filteredProducts.map((product) => (
                          <div className="col-md-6" key={product.id}>
                            <ProductCard product={product} onAddToCart={addToCart} onViewDetails={() => setSelectedProduct(product)} />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            }
          />
          <Route path="/cart" element={<Cart cartItems={cartItems} onUpdateQuantity={updateQuantity} onRemoveItem={removeItem} onCheckout={() => navigate('/checkout')} />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} onCompleteCheckout={() => {}} />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      {selectedProduct && <ProductDetails product={selectedProduct} onClose={() => setSelectedProduct(null)} onAddToCart={addToCart} />}
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
