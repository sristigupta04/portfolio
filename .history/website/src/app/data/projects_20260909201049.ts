

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
    
    <article className="project-card">
    <div className="project-card-top">
    <span className="project-number mono-font">{number}</span>
    <span className="project-arrow" aria-hidden="true">→</span>
    </div>

<div className="project-preview">
<div className="project-preview-inner">
<span className="project-preview-label mono-font">project/{number}</span>

    </article>
    
 )
}