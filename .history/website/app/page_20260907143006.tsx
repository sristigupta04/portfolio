"use client";

import {useState} from "react";
import Landing from "./src/components/Landing";
import About from "./src/components/About";
import Portfolio from "./src/components/3d/Portfolio";

export default function App() {
    const [current , setcurrent] = useState("landing");
    return (
       <main className="h-screen w-full overflow-hidden bg-[#18090b]">
        <div className="w-screen h-screen overflow-hidden">
            {current === "landing" && (
            <Landing onOpenAbout={() => setcurrent("about")} />
           ) }
            {current === "about" && (
                     <About onBack={() => setcurrent("landing")} />
            )}
        </div>
       
      <Portfolio />
    </main>

    )
}

