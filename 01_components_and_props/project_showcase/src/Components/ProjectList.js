import ProjectListItem from "./ProjectListItem";
<<<<<<< HEAD


=======
>>>>>>> 257e8dc4fac635ec4200cc7cd147f65b9a4d8e48
function ProjectList({projects}){
    console.log(projects)
    const projectListItems = projects.map((project) => (
        console.log(project),
<<<<<<< HEAD
        <ProjectListItem key={project.id} project={project} />
    ));
    return(
=======
        <ProjectListItem key={project.id} project={project}/>        
    ));
    return (
>>>>>>> 257e8dc4fac635ec4200cc7cd147f65b9a4d8e48
        <section>
            <div className="filter">
                <button>All</button>
                <button>Phase 5</button>
                <button>Phase 4</button>
                <button>Phase 3</button>
                <button>Phase 2</button>
                <button>Phase 1</button>
<<<<<<< HEAD

=======
>>>>>>> 257e8dc4fac635ec4200cc7cd147f65b9a4d8e48
            </div>
            <input type="text" placeholder="Search..."></input>
            <ul className="cards">{projectListItems}</ul>
        </section>
    )
}
<<<<<<< HEAD
export default ProjectList;
=======
export default ProjectList;
>>>>>>> 257e8dc4fac635ec4200cc7cd147f65b9a4d8e48
