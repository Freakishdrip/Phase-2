import Header from "./Components/Header"
import ProjectForm from "./Components/ProjectForm"
import ProjectList from "./Components/ProjectList";
import projects from "./projects";
function App() {
  return (
  <div className="App">
    <Header/>
    <ProjectForm />
    <ProjectList projects = {projects}/>
  </div>

  )
}

export default App;