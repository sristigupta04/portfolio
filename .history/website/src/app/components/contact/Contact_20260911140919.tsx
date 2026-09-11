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
                
                       
                    </div>
                <div className="contact-links">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sristigupta788@gmail.com&su=Portfolio%20Inquiry"
                    target="_blank" rel="noopener noreferrer" className="contact-link">
                        <span>sristigupta788@gmail.com</span>
                        <span aria-hidden="true" className="contact-link-separator">|</span>
                    </a>
                
"
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