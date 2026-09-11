

type Project ={
    number: string;
    title: string;
    description: string;
    tags: string[];
    imageUrl?: string;
    link?: string;
}

export default function  Project({number, title, description, tags, imageUrl, link}: Project){
 return(
    <>
    <article className="project-card">
    <div className="project-card-top">
    <span className="project-number mono-font">{number}</span>
    <span className="project-arrow" aria-hidden="true">→</span>
    </div>
    <h3 className="project-title">{title}</h3>
    </article>
    </>
 )
}