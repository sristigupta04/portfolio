"use client";

import { useState } from "react";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handle = () => {
    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="inner">
        <a href="#top" className="navbar-logo" onClick={handle}>
          sristi
        </a>

        <nav className="navbar-links" aria-label="Main Navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="navbar-link"
              onClick={handle}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={`navbar-menu ${open ? "navbar-menu-open" : ""}`}
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span />
          <span />
        </button>
      </div>

      <div
        className={`navbar-dropdown ${
          open ? "navbar-dropdown-open" : ""
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="mobile-menu-link"
            onClick={handle}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}