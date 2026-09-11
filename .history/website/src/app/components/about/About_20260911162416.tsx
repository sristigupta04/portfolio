const stack = [
  "System Design",
  "Next.js",
  "React",
  "Tailwind CSS",
  "typeScript",
  "SQL",
  "DevOps",
  "Database design",
];

export default function About() {
  return (
    <section className="portfolio-section" id="about">
      <div className="portfolio-container about-content">
        <div className="about-intro">
          <p className="about-eyebrow mono-font">About Me</p>
          <p className="about-large-text display-font">
            I&apos;m a passionate software developer with a love for creating
            innovative solutions.
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
          </div>

          <div className="about-details">
            <div className="about-detail-item">
              <span className="about-detail-label">Stack</span>
            </div>
            <div className="about-stack-pills">
              {stack.map((item) => (
                <span key={item} className="about-stack-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <img src="images/pic01.jpeg" alt="Sristi" />
      </div>
    </section>
  );
}