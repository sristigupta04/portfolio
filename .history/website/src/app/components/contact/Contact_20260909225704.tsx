export default function Contact(){
    return(
        <section 
        id="contact"
        className="portfolio-section contact-section">
            <div className="portfolio-container">
                <div className="section-heading">
                    <span className="section-number">04</span>
                    <h2 className="section-title">Let&apos;s Connect</h2>
                    <span className="section-line"/>
                </div>
                <div className="contact-content">
                    <div className="contact-intro">
                        <p className="contact-title display-font">
                            Have a project in mind? Let&apos;s collaborate and bring your ideas to life!
                        </p>
                        <p className="contact-description">
                            I&apos;m always open to new opportunities and collaborations. Whether you have a project, a question, or just want to say hello, feel free to reach out. I&apos;d love to hear from you!
                        </p>
                    </div>
                 <div className="contact-links">
                    <a href="mailto:sristigupta788@gmail.com"
                    className="contact-link">
                        <span>srisitgupta788@gmail.com</span>
                        <span aria-hidden="true" className="contact-link-separator">|</span>
                    </a>
                    <a href="https://www.linkedin.com/in/sristi-gupta-0b1a4b1b6/"
                    target="_blank" rel="noopener noreferrer"
                    className="contact-link">
                        <span>LinkedIn</span>
                        <span aria-hidden="true" className="contact-link-separator">|</span>
                    </a>
                    <a href="https://github.com/sristi-gupta"
                    target="_blank" rel="noopener noreferrer"
                    className="contact-link">
                        <span>GitHub</span>
                        <span aria-hidden="true" className="contact-link-separator">|</span>
                    </a>
                    </div>

                 </div>
                  <footer className="portfolio-footer">
          <span className="mono-font">© {new Date().getFullYear()} SRISTI GUPTA</span>

          <span className="mono-font">BUILT WITH NEXT.JS</span>
        </footer>
            </div>
        </section>
    )
}