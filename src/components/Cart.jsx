function Cart({ cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <section className="row g-4">
      <div className="col-lg-8">
        <div className="glass-panel p-4 rounded-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <p className="text-uppercase fw-semibold text-accent mb-1">Your cart</p>
              <h2 className="h3 mb-0">Ready to build your setup?</h2>
            </div>
            <span className="badge bg-accent">{cartItems.length} items</span>
          </div>

          {cartItems.length === 0 ? (
            <div className="empty-state p-4 rounded-4 text-center">
              <p className="display-6 mb-3">🛒</p>
              <h3 className="h5">Your cart is empty.</h3>
              <p className="text-light-emphasis">Add a few accessories to get your setup moving.</p>
            </div>
          ) : (
            <div className="d-flex flex-column gap-3">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item p-3 rounded-4 d-flex flex-column flex-md-row justify-content-between gap-3">
                  <div className="d-flex gap-3 align-items-center">
                    <div className="product-emoji">{item.icon}</div>
                    <div>
                      <h3 className="h6 mb-1">{item.name}</h3>
                      <p className="small text-light-emphasis mb-0">{item.category}</p>
                      <p className="fw-semibold mb-0">${item.price}</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2 flex-wrap">
                    <button className="btn btn-outline-light btn-sm" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
                      −
                    </button>
                    <span className="fw-semibold px-2">{item.quantity}</span>
                    <button className="btn btn-outline-light btn-sm" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
                      +
                    </button>
                    <button className="btn btn-outline-danger btn-sm" onClick={() => onRemoveItem(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="col-lg-4">
        <div className="glass-panel p-4 rounded-4">
          <p className="text-uppercase fw-semibold text-accent mb-2">Order summary</p>
          <div className="d-flex justify-content-between mb-2">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="d-flex justify-content-between fw-bold fs-5 pt-3 border-top border-secondary">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <button className="btn btn-accent w-100 mt-4" onClick={onCheckout} disabled={cartItems.length === 0}>
            Continue to checkout
          </button>
        </div>
      </div>
    </section>
  )
}

export default Cart
