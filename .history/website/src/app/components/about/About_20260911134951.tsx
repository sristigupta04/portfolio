const stack =[
  "System Design",
  "Next.js",
  "React",
"Tailwind CSS",
  "typeScript",
  "SQL",
  "DevOps",
  "Database design",
]

export default function About(){
  return (
    <div className="portfolio-section" id="about">
      <div className="portfolio-section-content">
        <div className="about-intro">
          <p className="about-eyebrow mono-font">About Me</p>
          <p className="about-large display-font">I'm a passionate software developer with a love for creating innovative solutions.</p>
          <p className="about-meta">I work across frontend development, backend integration, and
            interface design. I care about building products that are not
            only functional, but also feel simple and intentional to use.</p>

            <div className="about-details">
              <div className="about-detail-item">
                <span className="about-detail-label">Frontend</span>
                <span className="about-detail-value">React, Next.js, Tailwind CSS</span>
              </div>
              <div className="about-detail-item">
              </div>
            </div>
        </div>
      </div>
    </div>
  )

}