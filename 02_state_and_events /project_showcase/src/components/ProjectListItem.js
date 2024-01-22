<<<<<<< HEAD
import React, {useState} from "react";

function ProjectListItem({project}){
    console.log(project)

    const[clapCounts, setClapCounts] = useState(0)
    
    function handleClaps(){
        setClapCounts(clapCounts + 1)
        console.log(clapCounts)
    }
=======
import React, {useState} from "react"
function ProjectListItem({project}){
  const [clapCounts, setClapCounts] = useState(0)
  console.log(project)

  function handleClaps(){
    console.log(clapCounts)
    setClapCounts(clapCounts + 1)
  }
>>>>>>> 91ed2ab935e293be8535b2a91b43d5bbd7b855e4
  return (
      <li className="card">
          <figure className="image">
              <img src={project.image} alt={project.name}></img>
<<<<<<< HEAD
=======
              {/* <button className="claps" onClick={()=> setClapCounts(clapCounts+1)}>👏{clapCounts}</button> */}
>>>>>>> 91ed2ab935e293be8535b2a91b43d5bbd7b855e4
              <button className="claps" onClick={handleClaps}>👏{clapCounts}</button>
          </figure>

          <section className="details">
              <h4>{project.name}</h4>
              <p>{project.about}</p>
              {
                  project.link ?
                   <p>
                      <a href={project.link}>Link</a>
                  </p>
                  : null
              }
          </section>

          <footer className="extra">
              <span className="badge blue">Phase {project.phase}</span>
          </footer>


      </li>
  )
}

export default ProjectListItem;