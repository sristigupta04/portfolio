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
        <div className="projects-slider"></div>
        <div className="projects-grid">
            <Project number="01" title="Coffee Shop" description="A complete coffee shop experience with menu, cart, checkout, orders, and user features." tags={["Next.js", "TypeScript", "Backend"]} imageUrl="/images/projects/coffee-shop.png" />
            <Project number="02" title="ResQued" description="A thoughtful digital platform designed to make finding and managing resources easier." tags={["React", "UI/UX", "API"]} imageUrl="/images/projects/resqued.png" />
            <Project number="03" title="Yachty" description="A modern web experience focused on clean interfaces, smooth interactions, and visual storytelling." tags={["Next.js", "Design", "Animation"]} imageUrl="/images/projects/yachty.png" />
            <Project number="04" title="EcoTrack" description="A sustainable living platform that helps users
        </div>
   </section>
)
}