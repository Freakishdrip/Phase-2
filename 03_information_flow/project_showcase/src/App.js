import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
// import projects from "./projects";
import React, {useState} from "react"
const App = () => {
  const [projects, setProjects] = useState([])
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  function loadProjects(){
    fetch("http://localhost:4000/projects")
    .then((res)=> res.json())
    .then((data)=> setProjects(data))
  }
  const onToggleDarkMode = () => {setIsDarkMode(!isDarkMode)}

  const handleSearch = (new_value) => setSearchQuery(new_value)
  return (
    <div className="App">
      <Header isDarkMode={isDarkMode} setDarkMode={setIsDarkMode} onToggleDarkMode={onToggleDarkMode}/>
      <ProjectForm />
      <button onClick={loadProjects}>Load Projects</button>
      <ProjectList projects={projects} searchQuery={searchQuery} handleSearch={handleSearch} setSearchQuery={setSearchQuery} />
    </div>
  );
};

export default App;