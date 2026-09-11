
"use client "

import Navbar from "./Navbar";
import Background from "./background";


export default function Hero(){
    return(
        <section id="top" className="hero">
            <Background />
            <Navbar/>
            
        </section>
    )
}