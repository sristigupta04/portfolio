import Project from "./project";

const Projects =[
    {
        title: "Project 1",
        description: "This is a description of Project 1.",
        imageUrl: "/images/project1.jpg",
        tags: ["React", "TypeScript", "CSS"],
        link: "https://example.com/project1"
    },
     {
    number: "02",
    title: "ResQued",
    description:
      "A thoughtful digital platform designed to make finding and managing resources easier.",
    tags: ["React", "UI/UX", "API"],
  },
  {
    number: "03",
    title: "Yachty",
    description:
      "A modern web experience focused on clean interfaces, smooth interactions, and visual storytelling.",
    tags: ["Next.js", "Design", "Animation"],
  },

];
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
</section>
)
}