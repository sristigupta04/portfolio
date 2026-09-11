import { useState } from "react";
import Landing from "./src/components/landing/Landing";
import About from "./src/About";

export default function App() {
  const [currentSection, setCurrentSection] = useState("landing");

  return (
    <div className="w-screen h-screen overflow-hidden">
      {currentSection === "landing" && (
        <Landing
          onClick={() => setCurrentSection("about")}
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