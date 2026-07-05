const faqItems = [
  {
    question: 'What products does TechHub sell?',
    answer:
      'TechHub sells keyboards, mice, headsets, controllers, and other accessories for work, gaming, studying, and streaming.',
  },
  {
    question: 'How do I know if a product is compatible with my device?',
    answer:
      'Open the product details and check its compatibility and connection type. You can also use the shop filters to narrow the selection for your device.',
  },
  {
    question: 'How much does shipping cost?',
    answer:
      'Shipping costs are shown during checkout before you place your order. Promotional offers may include free shipping.',
  },
  {
    question: 'Can I change the quantity of an item in my cart?',
    answer:
      'Yes. Open your cart and use the quantity controls beside an item. You can also remove an item before checkout.',
  },
  {
    question: 'What payment methods are accepted?',
    answer:
      'TechHub accepts the payment options displayed on the checkout page. Enter your billing details there to complete your order securely.',
  },
  {
    question: 'Can I return or exchange a product?',
    answer:
      'Unused products may be returned or exchanged within 30 days of delivery. Keep the product in its original condition and packaging.',
  },
]

function FAQ() {
  return (
    <main className="faq-page mx-auto">
      <header className="text-center mb-4 mb-lg-5">
        <p className="text-uppercase fw-semibold text-accent mb-2">Help centre</p>
        <h1 className="display-5 fw-bold mb-3">Frequently asked questions</h1>
        <p className="lead text-light-emphasis mb-0">
          Quick answers about shopping, compatibility, delivery, and returns.
        </p>
      </header>

      <section className="faq-list" aria-label="Frequently asked questions">
        {faqItems.map((item, index) => (
          <details className="faq-item rounded-4" key={item.question} open={index === 0}>
            <summary className="fw-semibold">{item.question}</summary>
            <p className="text-light-emphasis mb-0">{item.answer}</p>
          </details>
        ))}
      </section>
    </main>
  )
}

export default FAQ
