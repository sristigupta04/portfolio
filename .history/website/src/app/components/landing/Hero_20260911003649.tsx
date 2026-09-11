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
          <div className="hero-photo-collage">

            <div className="hero-mini-image hero-mini-1">
              <img
                src="/images/pic01.jpeg"
                alt="Portfolio visual 01"
              />
            </div>

            <div className="hero-mini-image hero-mini-2">
              <img
                src="/images/pic02.jpeg"
                alt="Portfolio visual 02"
              />
            </div>

            <div className="hero-mini-image hero-mini-3">
              <img
                src="/images/pic03.jpeg"
                alt="Portfolio visual 03"
              />
            </div>

            <div className="hero-mini-image hero-mini-4">
              <img
                src="/images/pic04.jpeg"
                alt="Portfolio visual 04"
              />
            </div>

            <div className="hero-mini-image hero-mini-5">
              <img
                src="/images/pic05.jpeg"
                alt="Portfolio visual 05"
              />
            </div>

            <div className="hero-mini-image hero-mini-6">
              <img
                src="/images/pic06.jpeg"
                alt="Portfolio visual 06"
              />
            </div>

            <div className="hero-mini-image hero-mini-7">
              <img
                src="/images/pic07.jpeg"
                alt="Portfolio visual 07"
              />
            </div>

            <div className="hero-mini-image hero-mini-8">
              <img
                src="/images/pic08.jpeg"
                alt="Portfolio visual 08"
              />
            </div>

            <span className="hero-collage-label mono-font">
              TOUR PHOTOS
            </span>

          </div>
        </div>
      </div>

      {/* BOTTOM SCROLL INDICATOR */}
      <div className="hero-bottom portfolio-container">
        <span className="mono-font">
          SCROLL TO EXPLORE
        </span>

        <span
          className="hero-scroll-line"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}