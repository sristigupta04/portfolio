export default function Experience(){
return(
    <section 
    id="experience"
    className="portfolio-section experience-section">
        <div className="portfolio-container">
            <div className="section-heading">
                <span className="section-number">03</span>
                <h2 className="section-title">Experience</h2>
                <span className="section-line"/>
            </div>
            <div className="experience-list">
                <article className="experience-item">
                    <div className="experience-date mono-font">2022 - Present</div>

                    <div className="experience-content">
                        <h3> full stack developer</h3>
                    
                    <p className="experience-company">freelance/Indepenedent</p>
                    <p >
                      Building responsive web applications, developing APIs,
                connecting frontend interfaces with backend systems, and
                creating complete user experiences.  
                    </p>
                    </div>
                    <div className="experience-tag">
                        <span>Next.js</span>
                <span>React</span>
                <span>TypeScript</span>
                <span>Python</span> 
                    </div>

                </article>
                <article className="experience-item">
                     <div className="experience-date mono-font">
              PROJECT BASED
            </div>

            <div className="experience-content">
              <h3>Web Developer</h3>

              <p className="experience-company">
                Selected Projects
              </p>

              <p>
                Worked on complete web projects involving UI development,
                backend integration, authentication, databases, and
                deployment-ready application flows.
              </p>

              <div className="experience-tags">
                <span>Frontend</span>
                <span>Backend</span>
                <span>API</span>
                <span>Database</span>
              </div>
            </div>
                </article>
            </div>
        </div>
    </section>
)
}