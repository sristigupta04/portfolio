import Project from "./Card";


export default function Section() {
return(
    <section className="projects-section">
        <div className="portfolio-container">
            <div className="section-heading">
                <span className="section-number">01</span>
                <h2 className="section-title">Projects</h2>
                <span className="section-line" />
                </div>


<div className="project-intro">
    <p>
         A selection of projects where development, design, and
            problem-solving come together.
    </p>
</div>
<div className="projects-grid">
    {Projects.map((project, index) => (
        <Project key={project.number} number={project.number} title={project.title} description={project.description} imageUrl={project.imageUrl} tags={project.tags} link={project.link} />
    ))}
</div>
</div>
</section>
)
}