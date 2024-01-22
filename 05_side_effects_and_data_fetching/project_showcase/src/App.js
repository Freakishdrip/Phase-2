import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import {useState, useEffect} from "react";
import ProjectEditForm from "./components/ProjectEditForm";

const App = () => {
  const [projects, setProjects] = useState([])
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [projectID, setProjectID] = useState(null)

  useEffect(() => {
    console.log("Runing the useEffect hook")
    fetch("http://localhost:4000/projects")
    .then((res) => res.json())
    .then((proj) => setProjects(proj))

    return()=>{
      console.log("cleaning up the function")
    }
  },[])
  // function handleClick(){
  //   fetch("http://localhost:4000/projects")
  //   .then((res) => res.json())
  //   .then((proj) => setProjects(proj))
  // }

  const completeEditing = () => {
    setProjectID(null)
  }
  
  const enterProjectEditMode = (id) => {
    setProjectID(id)
  }
  
  const onUpdateProject = (newProject) => {
    const updatedProjects = projects.map((project) =>{
      if(project.id === newProject.id){
        return newProject
      }
      else{
        return project
      }
    })
    setProjects(updatedProjects)
  }
  

  const onToggleDarkMode = () => setIsDarkMode(!isDarkMode)

  // function onToggleDarkMode(){
  //   setIsDarkMode(!isDarkMode)
  // }

  function handleSearch(newsearch){
    setSearchQuery(newsearch)
  }

  const onAddProject = (newProject) => {
    setProjects([...projects, newProject])
  }

  const renderForm = () => {
    console.log(projectID)
    if(projectID){
      return(
        <ProjectEditForm projectID={projectID} completeEditing={completeEditing} onUpdateProject={onUpdateProject}/>
      )
    }
    else {
      return <ProjectForm projects={projects} onAddProject={onAddProject}/>
    }
  }

  //delete functionality
  const onDeleteProject = (id) => {
    const updatedProjects = projects.filter((project) => project.id !== id)
    setProjects(updatedProjects)
  }
 
  return (
    <div className="App">
      <Header isDarkMode = {isDarkMode} onToggleDarkMode = {onToggleDarkMode}/>
      {/* <ProjectForm projects = {projects} onAddProject = {onAddProject}/> */}
      {renderForm()}
      {/* <button onClick={handleClick}>Load Projects</button> */}
      <ProjectList searchQuery = {searchQuery}
       projects={projects} 
       handleSearch={handleSearch} 
       setProjects = {setProjects} 
       enterProjectEditMode={enterProjectEditMode} 
       onDeleteProject={onDeleteProject}
       />
    </div>
  );
};

export default App;