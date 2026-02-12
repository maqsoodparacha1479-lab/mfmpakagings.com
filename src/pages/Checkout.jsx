import React, { useMemo } from "react";
import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.6, ease: "easeOut" },
  }),
};

const FORM_ENDPOINT = "https://formspree.io/f/xbjvopdp";

export default function Checkout({ cartItems = [], onClear }) {
  const cartSummary = useMemo(
    () =>
      cartItems.map((item) => ({
        name: item.name,
        size: item.size,
        material: item.material,
        use: item.use,
        qty: item.qty,
      })),
    [cartItems]
  );

  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <motion.div
      className="page"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
    >
      <section className="section checkout">
        <motion.div
          className="section-title"
          variants={fade}
          custom={1}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="eyebrow">Checkout</span>
          <h1>Share your details and we will email the order summary.</h1>
          <p>
            Complete the form below. The order details will be sent directly to
            the owner email for distribution processing.
          </p>
        </motion.div>

        <div className="checkout-grid">
          <motion.div
            className="checkout-card"
            variants={fade}
            custom={2}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -6 }}
          >
            <h3>Order Summary</h3>
            {cartItems.length === 0 ? (
              <p className="muted">Your cart is empty.</p>
            ) : (
              <ul className="checkout-list">
                {cartItems.map((item) => (
                  <li key={item.id}>
                    <div>
                      <strong>{item.name}</strong>
                      <span>
                        {item.size} · {item.material}
                      </span>
                    </div>
                    <span className="qty">x{item.qty}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="checkout-total">
              <span>Total Items</span>
              <strong>{totalItems}</strong>
            </div>
            {cartItems.length > 0 && (
              <button className="button button-ghost" type="button" onClick={onClear}>
                Clear Cart
              </button>
            )}
          </motion.div>

          <motion.form
            className="checkout-form"
            action={FORM_ENDPOINT}
            method="POST"
            variants={fade}
            custom={3}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <label>
              Full Name
              <input name="name" type="text" placeholder="Your name" required />
            </label>
            <label>
              Email Address
              <input name="email" type="email" placeholder="you@email.com" required />
            </label>
            <label>
              Phone
              <input name="phone" type="tel" placeholder="+1 (555) 123-4567" />
            </label>
            <label>
              Company
              <input name="company" type="text" placeholder="Company name" />
            </label>
            <label className="full">
              Delivery Address
              <textarea
                name="address"
                rows="3"
                placeholder="Street, city, state, postal code"
              />
            </label>
            <label className="full">
              Notes
              <textarea
                name="notes"
                rows="3"
                placeholder="Any special instructions?"
              />
            </label>

            <input type="hidden" name="cart_items" value={JSON.stringify(cartSummary)} />
            <input type="hidden" name="total_items" value={totalItems} />

            <button
              className="button button-primary"
              type="submit"
              disabled={cartItems.length === 0}
            >
              Send Order Details
            </button>
            <p className="form-note">
              This will send your order details to the owner email.
            </p>
          </motion.form>
        </div>
      </section>
    </motion.div>
  );
}
