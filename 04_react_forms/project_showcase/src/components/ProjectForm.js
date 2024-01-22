import React, {useState} from "react"
import { v4 as uuidv4 } from 'uuid';
const ProjectForm = ({onAddProject, projects}) => {
  const [name, setName] = useState("")
  const [about, setAbout] = useState("")
  const [phase, setPhase] = useState("")
  const [link, setLink] = useState("")
  const [image, setImage] = useState("")
  console.log(phase)

  function handleName(event){
    setName(event.target.value)
  }
  function handleAbout(event){
    setAbout(event.target.value)
  }

  function handlePhase(event){
    setPhase(event.target.value)
  }

  function handleLink(event){
    setLink(event.target.value)
  }
  function handleImage(event){
    setImage(event.target.value)
  }

  console.log(name)
  console.log(about)

  function handleSubmit(event){
    event.preventDefault()
    const newProject = {
      id: projects.length+1,
      name: name,
      about: about,
      phase: phase,
      link: link, 
      image: image
    }
    console.log(newProject)
    onAddProject(newProject)
  }
  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Add New Project</h3>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={handleName} value={name}/>
        <label htmlFor="about">About</label>
        <textarea id="about" name="about" onChange={handleAbout} value={about}/>
        <label>Phase</label>
        <select name="phase" id="Phase" onChange={handlePhase} value={phase}>
          <option>Select One</option>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>
        <label>Project Homepage</label>
        <input type="text" id="link" name="link" onChange={handleLink} value={link}/>
        <label>Screenshot</label>
        <input type="text" id="image" name="image" onChange={handleImage} value={image}/>
        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;
