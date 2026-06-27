import styles from "./FeaturedWork.module.css";
import projects from "../../data/project";
import { FaGithub, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";

export default function FeaturedWork(){

return(

<section id="projects" className={styles.projects}>

<h2>Featured Projects</h2>

<div className={styles.grid}>

{projects.map((project,index)=>(

<div className={styles.card} key={index}>

<div className={styles.imageContainer}>
<img src={project.image} alt={project.title}/>
</div>

<div className={styles.content}>

<div className={styles.header}>

<h3>{project.title}</h3>

<div className={styles.links}>

<a href={project.github} target="_blank">
<FaGithub/>
</a>

<a href={project.live} target="_blank">
<FaExternalLinkAlt/>
</a>

</div>

</div>

<p>{project.description}</p>

<div className={styles.tech}>

{project.tech.map((item,i)=>

<span key={i}>{item}</span>

)}

</div>

<ul>

{project.features.map((feature,i)=>

<li key={i}>
<FaCheckCircle/>
{feature}
</li>

)}

</ul>

<a
href={project.github}
target="_blank"
className={styles.button}
>

View Repository →

</a>

</div>

</div>

))}

</div>

</section>

)

}