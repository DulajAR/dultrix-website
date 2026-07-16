import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-shell">
        <div className="hero-copy">
          <p className="hero-kicker">[ TRANSFORMING IDEAS ]</p>

          <h1 className="hero-title">
            Innovative Technology Solutions to Grow Your Business
          </h1>

          <p className="hero-subtitle">
            Dultrix Technologies builds secure, scalable software products and digital platforms that help teams move faster, serve better, and scale with confidence.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#services">
              Explore Services
            </a>

            <a className="btn btn-secondary" href="#portfolio">
              See Our Work
            </a>
          </div>

          <ul className="hero-badges" aria-label="Key capabilities">
            <li>Custom web platforms</li>
            <li>Enterprise software</li>
            <li>Automation & integrations</li>
          </ul>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-visual-main hero-visual-image-wrap">
            <Image
              className="hero-visual-image"
              src="/assets/images/Dultrix_Technologies_Hero.png"
              alt="Dultrix Technologies team working in the office"
              fill
              priority
              sizes="(max-width: 1100px) 100vw, 48vw"
            />

            <div className="hero-visual-overlay">
              <div className="hero-visual-card hero-visual-card-left">
                <span className="hero-card-label">Trusted by 50+ businesses</span>
                <strong>Deployment-ready teams</strong>
              </div>

              <div className="hero-visual-card hero-visual-card-right">
                <div className="hero-rating">
                  <strong>5.0</strong>
                  <span>★★★★★</span>
                </div>
                <p>Based on client relationships, repeat work, and measurable outcomes.</p>
              </div>
            </div>
          </div>
        </div>

        <a className="scroll-indicator" href="#contact" aria-label="Scroll to the contact section">
          <span className="scroll-indicator-text">Scroll Down</span>
          <span className="scroll-indicator-arrow">↓</span>
        </a>
      </div>
    </section>
  );

}