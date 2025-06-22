import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-[1000]">
      {/* Main Desktop Nav */}
      <div className="navbar-bg">
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="nav-link"
                tabIndex={0}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Hamburger (mobile only, on right) */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 md:hidden block hamburger">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none z-[1100]"
            aria-label="Toggle menu"
          >
            <span className="block w-7 h-1 bg-white mb-2 rounded"></span>
            <span className="block w-7 h-1 bg-white mb-2 rounded"></span>
            <span className="block w-7 h-1 bg-white rounded"></span>
          </button>
        </div>
      </div>
      {/* Mobile overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/95 flex flex-col justify-center items-center gap-12 z-[1200] md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white text-3xl font-bold"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-8 right-8 text-5xl text-white"
            aria-label="Close Menu"
          >&times;</button>
        </div>
      )}
    </nav>
  );
}
