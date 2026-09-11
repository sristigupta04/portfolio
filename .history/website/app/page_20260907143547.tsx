import { useState } from "react";
import Landing from "./components/Landing";
import About from "./components/About";

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
        <AboutWorld
          onClick={() => setCurrentSection("landing")}
        />
      )}
    </div>
  );
}