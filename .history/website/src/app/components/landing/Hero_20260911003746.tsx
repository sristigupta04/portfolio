"use client";

import Navbar from "./Navbar";
import Background from "./background";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <Background />
      <Navbar />

      <div className="hero-content portfolio-container">
        {/* LEFT CONTENT */}
        <div className="hero-intro">
          <p className="hero-eyebrow mono-font">
            CREATIVE DEVELOPER
          </p>

          <h1 className="hero-title">
            <span className="hero-title-hello">
              Hi, I&apos;m
            </span>

            <span className="hero-title-name">
              Sristi Gupta
            </span>
          </h1>

          <p className="hero-description">
            I build thoughtful digital experiences where
            clean development meets creative design.
          </p>

          <div className="hero-actions">
            <a href="#work" className="portfolio-button">
              VIEW MY WORK
              <span aria-hidden="true">↗</span>
            </a>

            <a href="#contact" className="hero-secondary-link">
              LET&apos;S TALK
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE COLLAGE */}
        <div className="hero-visual">
  <div className="hero-collage">

    <div className="collage-photo collage-photo-1">
      <img src="/images/pic01.jpeg" alt="" />
    </div>

    <div className="collage-photo collage-photo-2">
      <img src="/images/pic02.jpeg" alt="" />
    </div>

    <div className="collage-photo collage-photo-3">
      <img src="/images/pic03.jpeg" alt="" />
    </div>

    <div className="collage-photo collage-photo-4">
      <img src="/images/pic04.jpeg" alt="" />
    </div>

    <div className="collage-photo collage-photo-5">
      <img src="/images/pic05.jpeg" alt="" />
    </div>

    <div className="collage-photo collage-photo-6">
      <img src="/images/pic06.jpeg" alt="" />
    </div>

    <div className="collage-photo collage-photo-7">
      <img src="/images/pic07.jpeg" alt="" />
    </div>

    <div className="collage-photo collage-photo-8">
      <img src="/images/pic08.jpeg" alt="" />
    </div>

    {/* Text / graphic elements will come here */}
    <div className="collage-text collage-text-1">
      TOUR
    </div>

    <div className="collage-text collage-text-2">
      PHOTOS
    </div>

    <div className="collage-mark collage-mark-1">
      ✦
    </div>

  </div>
</div>

      </div>
    </section>
  );
}