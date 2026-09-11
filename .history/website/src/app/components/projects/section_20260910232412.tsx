import { projects } from "@/app/data/projects";
import Project from "./Card";


export default function Section() {
return(
   <section id="work" className="project-section projects-section">
    <div className="projects-container">
        <div className="section-heading">
            <span className="section-number mono-font">02.</span>
            <h2 className="section-title display-font">Projects</h2>
            <span className="section-line" aria-hidden="true"></span>
        </div>
        <div className="projects-slider">
        <div className="projects-grid">
            {projects.map((project) => (
                <Project
                    key={project.number}
                    number={project.number}
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    imageUrl={project.imageUrl}
                    link={project.link}
                />
            ))} 
        </div>
   </div>
   <div className="projects-scroll-hint mono-font">
    drag to scroll <span className="projects-scroll-arrow" aria-hidden="true">→</span>
   </div>
   </section>
)
}