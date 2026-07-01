function Filters({ filters, onFilterChange, onClearFilters, resultCount, productsCount }) {
  const categories = ['Keyboard', 'Mouse', 'Mousepad', 'Headset', 'Controller']
  const brands = ['NovaKeys', 'GlidePro', 'EchoBeam', 'StreamLite', 'ControlX', 'AuraKey', 'PlayPulse', 'SpeedMat']
  const colours = ['Black', 'White', 'Gray']
  const connectionTypes = ['Wired', 'Wireless']
  const compatibilities = ['PC', 'Mac', 'PlayStation', 'Xbox', 'Mobile']
  const useCases = ['Gaming', 'Work', 'Streaming', 'Travel', 'Study']

  const handleChange = (name, value) => {
    onFilterChange(name, value)
  }

  return (
    <aside className="filters-card p-4 rounded-4 h-100">
      <div className="d-flex justify-content-between align-items-start mb-3">
        <div>
          <p className="text-uppercase fw-semibold text-accent mb-1">Explore</p>
          <h2 className="h4 mb-0">Refine your search</h2>
        </div>
        <button className="btn btn-sm filter-chip" onClick={onClearFilters}>
          Clear all
        </button>
      </div>

      <div className="mb-4">
        <label htmlFor="search" className="form-label fw-semibold">Search products</label>
        <input
          id="search"
          className="form-control"
          placeholder="Try keyboard or mouse"
          value={filters.search}
          onChange={(event) => handleChange('search', event.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="category" className="form-label fw-semibold">Category</label>
        <select id="category" className="form-select" value={filters.category} onChange={(event) => handleChange('category', event.target.value)}>
          <option value="All">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="brand" className="form-label fw-semibold">Brand</label>
        <select id="brand" className="form-select" value={filters.brand} onChange={(event) => handleChange('brand', event.target.value)}>
          <option value="All">All</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="price" className="form-label fw-semibold">Price range</label>
        <select id="price" className="form-select" value={filters.price} onChange={(event) => handleChange('price', event.target.value)}>
          <option value="All">All prices</option>
          <option value="under50">Under $50</option>
          <option value="50to100">$50 – $100</option>
          <option value="over100">Over $100</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="colour" className="form-label fw-semibold">Colour</label>
        <select id="colour" className="form-select" value={filters.colour} onChange={(event) => handleChange('colour', event.target.value)}>
          <option value="All">All colours</option>
          {colours.map((colour) => (
            <option key={colour} value={colour}>
              {colour}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <p className="form-label fw-semibold mb-2">Connection type</p>
        <div className="d-flex flex-wrap gap-2">
          {connectionTypes.map((type) => (
            <button key={type} type="button" className={`btn btn-sm filter-chip ${filters.connectionType === type ? 'active' : ''}`} onClick={() => handleChange('connectionType', filters.connectionType === type ? 'All' : type)}>
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <p className="form-label fw-semibold mb-2">Compatibility</p>
        <div className="d-flex flex-wrap gap-2">
          {compatibilities.map((item) => (
            <button key={item} type="button" className={`btn btn-sm filter-chip ${filters.compatibility === item ? 'active' : ''}`} onClick={() => handleChange('compatibility', filters.compatibility === item ? 'All' : item)}>
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <p className="form-label fw-semibold mb-2">Use case</p>
        <div className="d-flex flex-wrap gap-2">
          {useCases.map((item) => (
            <button key={item} type="button" className={`btn btn-sm filter-chip ${filters.useCase === item ? 'active' : ''}`} onClick={() => handleChange('useCase', filters.useCase === item ? 'All' : item)}>
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="rating" className="form-label fw-semibold">Minimum rating</label>
        <select id="rating" className="form-select" value={filters.rating} onChange={(event) => handleChange('rating', event.target.value)}>
          <option value="0">Any rating</option>
          <option value="4">4.0+</option>
          <option value="4.5">4.5+</option>
          <option value="4.8">4.8+</option>
        </select>
      </div>

      <p className="small text-light-emphasis mb-0">Showing {resultCount} of {productsCount} products</p>
    </aside>
  )
}

export default Filters
