function ProductVisual({ product, className = '' }) {
  if (!product?.image) return null

  return <img src={product.image} alt={product.name} className={className} loading="lazy" />
}

export default ProductVisual
