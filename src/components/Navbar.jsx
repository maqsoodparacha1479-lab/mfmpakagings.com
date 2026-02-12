import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar({ theme, onToggleTheme, cartCount = 0 }) {
  const [open, setOpen] = useState(false);
  const isLight = theme === "light";

  return (
    <header className="nav-shell">
      <div className="nav-glow" aria-hidden="true" />
      <div className="nav-inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <img
            src="/products/WhatsApp Image 2026-02-11 at 4.53.18 AM.jpeg"
            alt="MFM Packagings"
            className="brand-logo"
          />
        </NavLink>

        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className="nav-link">
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/checkout" className="nav-link nav-cart">
            Cart
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </NavLink>
          <button className="theme-toggle" type="button" onClick={onToggleTheme}>
            <span className="sr-only">Toggle theme</span>
            {isLight ? "Dark" : "Light"} Mode
          </button>
          <a className="nav-cta" href="/contact#contact-card">
            Get a Quote
          </a>
        </nav>

        <button
          className="nav-toggle"
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">Toggle menu</span>
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="nav-mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="nav-mobile-link"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/checkout"
              className="nav-mobile-link nav-mobile-cart"
              onClick={() => setOpen(false)}
            >
              Cart {cartCount > 0 ? `(${cartCount})` : ""}
            </NavLink>
            <button
              className="nav-mobile-toggle"
              type="button"
              onClick={() => {
                onToggleTheme();
                setOpen(false);
              }}
            >
              {isLight ? "Dark" : "Light"} Mode
            </button>
            <a
              className="nav-mobile-cta"
              href="/contact#contact-card"
              onClick={() => setOpen(false)}
            >
              Get a Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
