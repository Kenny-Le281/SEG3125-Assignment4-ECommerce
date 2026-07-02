import ProductVisual from './ProductVisual'

function ProductDetails({ product, onClose, onAddToCart }) {
  if (!product) return null

  return (
    <div className="modal d-block" role="dialog" aria-modal="true" aria-labelledby="product-details-title">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content glass-panel">
          <div className="modal-header border-0">
            <div>
              <p className="text-accent fw-semibold mb-1">{product.category}</p>
              <h2 id="product-details-title" className="h3 mb-0">{product.name}</h2>
            </div>
            <button type="button" className="btn-close btn-close-white" aria-label="Close details" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <div className="row g-4">
              <div className="col-md-5">
                <div className="detail-visual rounded-4 p-4 text-center">
                  <ProductVisual product={product} className="detail-visual-image" />
                  <p className="small text-light-emphasis mt-3 mb-0">{product.brand} • {product.colour}</p>
                </div>
              </div>
              <div className="col-md-7">
                <p className="lead">{product.description}</p>
                <div className="row g-2 mt-3">
                  <div className="col-sm-6">
                    <p className="fw-semibold mb-1">Price</p>
                    <p>${product.price}</p>
                  </div>
                  <div className="col-sm-6">
                    <p className="fw-semibold mb-1">Rating</p>
                    <p>⭐ {product.rating}</p>
                  </div>
                  <div className="col-sm-6">
                    <p className="fw-semibold mb-1">Compatibility</p>
                    <p>{product.compatibility.join(', ')}</p>
                  </div>
                  <div className="col-sm-6">
                    <p className="fw-semibold mb-1">Connection</p>
                    <p>{product.connectionType}</p>
                  </div>
                  <div className="col-sm-6">
                    <p className="fw-semibold mb-1">Use case</p>
                    <p>{product.useCase}</p>
                  </div>
                  <div className="col-sm-6">
                    <p className="fw-semibold mb-1">Stock</p>
                    <p>{product.stockStatus}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer border-0">
            <button type="button" className="btn btn-outline-light" onClick={onClose}>
              Keep exploring
            </button>
            <button type="button" className="btn btn-accent" onClick={() => onAddToCart(product)}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="modal-backdrop show"></div>
    </div>
  )
}

export default ProductDetails
