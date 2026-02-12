import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";

const THEME_KEY = "atlas-theme";

export default function App() {
  const location = useLocation();
  const [theme, setTheme] = useState("light");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
    }
  }, []);

  useEffect(() => {
    const root = document.body;
    if (theme === "light") {
      root.classList.add("theme-light");
    } else {
      root.classList.remove("theme-light");
    }
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  return (
    <div className="app-shell">
      <Navbar
        theme={theme}
        onToggleTheme={() =>
          setTheme((prev) => (prev === "dark" ? "light" : "dark"))
        }
        cartCount={cartItems.reduce((sum, item) => sum + item.qty, 0)}
      />
      <main className="app-main">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/products"
              element={
                <Products
                  cartItems={cartItems}
                  onAdd={(product) =>
                    setCartItems((prev) => {
                      const existing = prev.find((item) => item.id === product.id);
                      if (existing) {
                        return prev.map((item) =>
                          item.id === product.id
                            ? { ...item, qty: item.qty + 1 }
                            : item
                        );
                      }
                      return [...prev, { ...product, qty: 1 }];
                    })
                  }
                  onRemove={(id) =>
                    setCartItems((prev) =>
                      prev
                        .map((item) =>
                          item.id === id ? { ...item, qty: item.qty - 1 } : item
                        )
                        .filter((item) => item.qty > 0)
                    )
                  }
                  onClear={() => setCartItems([])}
                />
              }
            />
            <Route
              path="/checkout"
              element={<Checkout cartItems={cartItems} onClear={() => setCartItems([])} />}
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
