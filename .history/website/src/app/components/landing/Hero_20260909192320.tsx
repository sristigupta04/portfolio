
"use client "

import Navbar from "./Navbar";
import Background from "./background";


export default function Hero(){
    return(
        <section id="top" className="hero">
            <Background />
            <Navbar/>
            <div className="hero-content portfolio-container">
                <p className="hero-eyebrow mono-font">Creative developer</p>
        <h1 className="hero-title display-font">hi,I&apos;m<span>sristi</span> </h1>
        <p className="hero-description">
            I build thoughtful digital experiences where clean development
          meets creative design.
        </p>
        <div className="hero-actions">
            <a href="#work" className="portfolio-button">View my work
            <span aria-hidden="true" className="hero-actions-separator">|</span>
</a>
<a href="#contact" className="portfolio-button">Let&apos;s talk</a>
</div>
        </div>
        <div className="hero-bottom portfolio-container">
            <span className="mono-font">SCROLL TO EXPOLORE</span>
            <span className="hero-scroll-line" aria-hidden="true"></span>
        </section>
    )
}