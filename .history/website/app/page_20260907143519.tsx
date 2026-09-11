import { useState } from "react";
import LandingWorld from "./components/LandingWorld";
import AboutWorld from "./components/AboutWorld";

export default function App() {
  const [currentSection, setCurrentSection] = useState("landing");

  return (
    <div className="w-screen h-screen overflow-hidden">
      {currentSection === "landing" && (
        <LandingWorld
          onClick={() => setCurrentSection("about")}
        />
      )}

      {currentSection === "about" && (
        <AboutWorld
          onClick={() => setCurrentSection("landing")}
        />
      )}
    </div>
  );
}