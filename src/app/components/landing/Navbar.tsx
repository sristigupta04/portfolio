"use client";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="inner">
      <a href="#top" className="navbar-logo">
  Sono la mia forza. <span>✦</span>
</a>

        <nav className="navbar-links" aria-label="Main Navigation">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`navbar-link ${
                index === 0 ? "navbar-link-active" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}