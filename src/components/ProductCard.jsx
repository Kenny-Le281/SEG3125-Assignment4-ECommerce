import ProductVisual from './ProductVisual'

function ProductCard({ product, onAddToCart, onViewDetails }) {
  return (
    <article className="product-card p-3 rounded-4 h-100">
      <div className="d-flex justify-content-between align-items-start mb-3">
        <div className="product-visual-wrapper rounded-3 overflow-hidden">
          <ProductVisual product={product} className="product-visual" />
        </div>
        <span className={`badge ${product.newest ? 'bg-accent' : 'bg-secondary-subtle text-dark'}`}>
          {product.newest ? 'New' : product.stockStatus}
        </span>
      </div>
      <div className="mb-3">
        <p className="small text-accent fw-semibold mb-1">{product.category}</p>
        <h3 className="h5 mb-2">{product.name}</h3>
        <p className="small text-light-emphasis">{product.description}</p>
      </div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <p className="fw-bold mb-0">${product.price}</p>
          <p className="small text-light-emphasis mb-0">⭐ {product.rating}</p>
        </div>
      </div>
      <div className="d-flex flex-wrap gap-2 mb-3">
        <span className="pill">{product.brand}</span>
        <span className="pill">{product.colour}</span>
        <span className="pill">{product.connectionType}</span>
        <span className="pill">{product.useCase}</span>
        {product.compatibility.map((device) => (
          <span className="pill" key={device}>{device}</span>
        ))}
      </div>
      <div className="d-flex gap-2">
        <button className="btn btn-accent flex-grow-1" onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
        <button className="btn btn-outline-light" onClick={() => onViewDetails(product)}>
          Details
        </button>
      </div>
    </article>
  )
}

export default ProductCard
