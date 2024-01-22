import ProjectListItem from "./ProjectListItem";
<<<<<<< HEAD
import React, {useState} from "react";

function ProjectList({projects}){
    console.log(projects)
    
    
    const [search, setSearch] = useState("")

    const searchResults = projects.filter((project) => (
        project.name.toLowerCase().includes(search.toLowerCase())
    ))

    const projectListItems = searchResults.map((project) => (
        console.log(project),
        <ProjectListItem key={project.id} project={project}/>        
    ));

    function handleSearch(event){
        setSearch(event.target.value)
        console.log(search)
    }


=======
import React, {useState} from "react"
function ProjectList({projects}){
    console.log(projects)
    const [search, setSearch] = useState("")

    const searchResults = projects.filter((project) => {
      return project.name.toLowerCase().includes(search.toLowerCase())
    })

    // const searchResults = projects.filter((project) => (
    //   project.name.toLowerCase().includes(search.toLowerCase())
    // ))

    const projectListItems = searchResults.map((project) => (
        <ProjectListItem key={project.id} project={project}/> 
        // <ProjectListItem key={project.id} name={project.name} about={project.about}/>  
        // <ProjectListItem key={project.id} {...project}/>      
    ));
    function handleSearch(event){
      setSearch(event.target.value)
      console.log(search)
    }
>>>>>>> 91ed2ab935e293be8535b2a91b43d5bbd7b855e4
    return (
        <section>
            <div className="filter">
                <button>All</button>
                <button>Phase 5</button>
                <button>Phase 4</button>
                <button>Phase 3</button>
                <button>Phase 2</button>
                <button>Phase 1</button>
            </div>
            <input type="text" placeholder="Search..." onChange={handleSearch}></input>
            <ul className="cards">{projectListItems}</ul>
        </section>
    )
}
export default ProjectList;