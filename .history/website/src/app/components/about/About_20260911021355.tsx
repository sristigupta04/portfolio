export default function About() {
  return (
    <section id="about" className="portfolio-section">
      <div className="portfolio-container about-content">
        <div className="about-intro">
          <p className="about-eyebrow mono-font">About me</p>

          <p className="about-large-text display-font">
            I&apos;m a developer who enjoys turning ideas into thoughtful
            digital experiences.
          </p>

          <p className="about-meta">
            I work across frontend development, backend integration, and
            interface design. I care about building products that are not
            only functional, but also feel simple and intentional to use.
          </p>

          <div className="about-details">
            <div className="about-detail-item">
              <span className="about-detail-label">Focus</span>
              <span className="about-detail-value">Web development</span>
            </div>

            <div className="about-detail-item about-stack-pill">
              <span className="about-detail-label">Stack</span>
              <span className="about-detail-value">
                Next.js · React · TypeScript
              </span>
            </div>
          </div>
        </div>

        {/* second grid column — .about-content expects this. Point src at a real photo */}
        <img src="/about-photo.jpg" alt="Sristi" />
      </div>
    </section>
  );
}