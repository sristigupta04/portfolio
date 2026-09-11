import { div } from "three/src/nodes/tsl/TSLBase.js"

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
              
              </div>
               <div className="about-detail-item">
               
            <div className="about-stack-pills">
              {stack.map((item) => (
                <span key={item} className="about-stack-pill">
                  {item}
                </span>
              ))}
            </div>
              </div>
            </div>
        </div>
             <img src="/about-photo.jpg" alt="Sristi" />
      </div>
    </div>
  )

}