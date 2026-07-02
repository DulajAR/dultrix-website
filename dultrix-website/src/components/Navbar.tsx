"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const navItems = ["Home", "Services", "Work", "Contact"];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (currentScrollY < 16) {
        setIsHidden(false);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (delta > 8) {
        setIsHidden(true);
      } else if (delta < -8) {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((currentOpen) => !currentOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`site-header${isHidden && !menuOpen ? " site-header-hidden" : ""}`}>
      <div className="announcement-bar">
        <span className="announcement-icon">⚡</span>
        <p>
          Fast & Reliable IT Solution Services. Built for ambitious product teams.
        </p>
        <a href="#contact">Contact Dultrix</a>
      </div>

      <nav className={`site-nav${menuOpen ? " site-nav-open" : ""}`} aria-label="Primary">
        <div className="site-nav-top">
          <a className="site-brand" href="#home" onClick={closeMenu}>
            <span className="site-brand-badge">
              <Image
                className="site-brand-logo"
                src="/assets/images/Dultrix_Technologies_logo.png"
                alt="Dultrix Technologies"
                width={150}
                height={48}
                priority
              />
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={toggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className="site-nav-panel" id="primary-navigation">
          <div className="site-links">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase() === "work" ? "portfolio" : item.toLowerCase()}`}
                onClick={closeMenu}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="site-actions">
            <a className="btn btn-nav" href="#contact" onClick={closeMenu}>
              Get Started
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;