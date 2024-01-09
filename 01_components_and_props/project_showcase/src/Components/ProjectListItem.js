function ProjectListItem({project}){
    console.log(project)
<<<<<<< HEAD
    return(
        <li className="card">
            <figure className="image">
                <img src={project.image} alt={project.name}></img>
                <button className="claps"> claps {0}</button>
=======
    return (
        <li className="card">
            <figure className="image">
                <img src={project.image} alt={project.name}></img>
                <button className="claps">👏{0}</button>
>>>>>>> 257e8dc4fac635ec4200cc7cd147f65b9a4d8e48
            </figure>

            <section className="details">
                <h4>{project.name}</h4>
                <p>{project.about}</p>
                {
<<<<<<< HEAD
                    project.link ? 
                    <p>
=======
                    project.link ?
                     <p>
>>>>>>> 257e8dc4fac635ec4200cc7cd147f65b9a4d8e48
                        <a href={project.link}>Link</a>
                    </p>
                    : null
                }
            </section>

            <footer className="extra">
<<<<<<< HEAD
                <span className="badge blue">
                    Phase {project.phase}
                </span>
            </footer>
        </li>

        
    )
}
=======
                <span className="badge blue">Phase {project.phase}</span>
            </footer>


        </li>
    )
}

>>>>>>> 257e8dc4fac635ec4200cc7cd147f65b9a4d8e48
export default ProjectListItem;