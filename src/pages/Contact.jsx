import React from "react";
import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Contact() {
  return (
    <motion.div
      className="page"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
    >
      <section className="section">
        <motion.div
          className="section-title"
          variants={fade}
          custom={1}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="eyebrow">Contact</span>
          <h1>Let’s scope your next distribution order.</h1>
          <p>
            Tell us about your SKUs, volumes, and delivery timeline. A sales
            representative will reply within two business days.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.form
            className="contact-form"
            variants={fade}
            custom={2}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <label>
              Full Name
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              Work Email
              <input type="email" placeholder="name@company.com" />
            </label>
            <label>
              Delivery Location
              <input type="text" placeholder="City, Region" />
            </label>
            <label className="full">
              Order Details
              <textarea rows="5" placeholder="Share SKUs, quantities, and timeline." />
            </label>
            <button className="button button-primary" type="submit">
              Send Request
            </button>
          </motion.form>

          <motion.div
            className="contact-card"
            id="contact-card"
            variants={fade}
            custom={3}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -6 }}
          >
            <h3>Direct Lines</h3>
            <p>Reach our team for pricing, delivery timelines, or stock availability.</p>
            <div className="contact-detail">
              <span>Phone</span>
              <strong>647-767-9687</strong>
            </div>
            <div className="contact-detail">
              <span>Email</span>
              <strong>mfahadmanzoor60@gmail.com</strong>
            </div>
            <div className="contact-detail">
              <span>HQ</span>
              <strong>GTA + Niagara Peninsula</strong>
            </div>
            <div className="contact-note">
              Always exceeding your distribution needs for warehousing.
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
