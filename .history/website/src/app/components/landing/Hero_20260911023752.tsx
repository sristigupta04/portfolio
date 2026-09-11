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

          <h1 className="hero-title">
            <span
              className="hero-title-name"
              style={{ letterSpacing: "-0.04em" }}
            >
              Sristi - MERN STACK DEVELOPMENT
            </span>
          </h1>

          <h2
            className="hero-description"
            style={{
              fontFamily: "inherit",
              fontSize: "clamp(1.4rem, 2vw, 2rem)",
              lineHeight: "1.2",
              fontWeight: 500,
            }}
          >
            Be the architect of your own future.
          </h2>

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
              <img src="/images/pic01.jpeg" alt="Portfolio visual 01" />
            </div>


            <span className="collage-mark collage-mark-1">
              ✦
            </span>
          </div>
        </div>
      </div>

    </section>
  );
}