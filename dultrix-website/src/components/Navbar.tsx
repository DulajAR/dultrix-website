import Image from "next/image";

const navItems = ["Home", "Services", "Work", "Contact"];

export function Navbar() {
  return (
    <header className="site-header">
      <div className="announcement-bar">
        <span className="announcement-icon">⚡</span>
        <p>
          Fast & Reliable IT Solution Services. Built for ambitious product teams.
        </p>
        <a href="#contact">Contact Dultrix</a>
      </div>

      <nav className="site-nav" aria-label="Primary">
        <a className="site-brand" href="#home">
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

        <div className="site-links">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase() === "work" ? "portfolio" : item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </div>

        <div className="site-actions">
          <a className="nav-link nav-link-muted" href="tel:+94112239409">
            (+94) 74 071 4534
          </a>
          <a className="btn btn-nav" href="#contact">
            Get Started
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;