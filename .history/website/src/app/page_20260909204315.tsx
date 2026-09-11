import Hero from "./components/landing/Hero";
import Project from "./components/projects/section";
import About from "./components/about/About";
import Experience from "./components/experience/experience";
import Contact from "./components/contact/contact";

export default function Home(){
  return(
    <main>
      <Hero />
      <Project />
      <About />
      <Experience />
      <Contact />
    </main>
  )
}