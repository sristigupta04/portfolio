
"use client";

import Navbar from "./Navbar";
import Background from "./background";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <Background />
      <Navbar />

      <div className="hero-content portfolio-container">
        <div className="hero-intro">
          <p className="hero-eyebrow mono-font">
            JE SUIS CRÉATIVE, JE CONÇOIS DES EXPÉRIENCES NUMÉRIQUES.
          </p>

          <h1 className="hero-title">
            <span className="hero-title-name">
              Sristi — Full Stack Developer
            </span>
          </h1>

          <p className="hero-description">
            Be the architect of your own future.
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

        <div className="hero-visual">
          <div className="hero-collage">
            <div className="collage-photo collage-photo-1">
              <img
                src="/images/pic01.jpeg"
                alt="Portfolio visual 01"
              />
            </div>

            <div className="collage-photo collage-photo-2">
              <img
                src="/images/pic02.jpeg"
                alt="Portfolio visual 02"
              />
            </div>

            <div className="collage-photo collage-photo-3">
              <img
                src="/images/pic03.jpeg"
                alt="Portfolio visual 03"
              />
            </div>

            <div className="collage-photo collage-photo-4">
              <img
                src="/images/pic04"
                alt="Portfolio visual 04"
              />
            </div>

            <div className="collage-photo collage-photo-5">
              <img
                src="/images/pic05.jpeg"
                alt="Portfolio visual 05"
              />
            </div>

            <div className="collage-photo collage-photo-6">
              <img
                src="/images/pic06.jpeg"
                alt="Portfolio visual 06"
              />
            </div>

            <div className="collage-photo collage-photo-7">
              <img
                src="/images/pic07.jpeg"
                alt="Portfolio visual 07"
              />
            </div>

            <div className="collage-photo collage-photo-8">
              <img
                src="/images/pic08.jpeg"
                alt="Portfolio visual 08"
              />
            </div>

            <span className="collage-text collage-text-1">
              TOUR
            </span>

            <span className="collage-text collage-text-2">
              PHOTOS
            </span>

            <span className="collage-mark collage-mark-1">
              ✦
            </span>
          </div>
        </div>
      </div>

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

