"use client";

import {useState} from "react";
import Landing from "./src/components/Landing";
import About from "./src/components/About";

export default function App() {
    const [current , setcurrent] = useState("landing");
    return (
        <div className="w-screen h-screen overflow-hidden">
            {current === "landing" && (
            <Landing onOpenAbout={() => setcurrent("about")} />
           ) }
            {current === "about" && (
                     <About onBack={() => setcurrent("landing")} />
            )}
        </div>
    )
}