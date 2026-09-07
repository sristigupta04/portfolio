"use client";

import { useState } from "react";
import Landing from "./src/components/landing/Landing";
import About from "./About";

export default function App() {
  const [currentSection, setCurrentSection] = useState("landing");

  return (
    <div>
      {currentSection === "landing" && (
        <Landing
          onOpenAbout={() => setCurrentSection("about")}
        />
      )}

      {currentSection === "about" && (
        <About
          onClick={() => setCurrentSection("landing")}
        />
      )}
    </div>
  );
}