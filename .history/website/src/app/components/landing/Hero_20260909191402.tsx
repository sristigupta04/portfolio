
"use client "

import Navbar from "./Navbar";
import Background from "./background";


export default function Hero(){
    return(
        <section id="top" className="hero">
            <Background />
            <Navbar/>
            <div className="hero-content portfolio-container">
                <p className="hero-eyebrow mono-font">Creative developer</p>
        <h1 className="hero-title display-font">hi,I&apos;m </h1>
        </section>
    )
}