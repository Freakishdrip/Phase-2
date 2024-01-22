import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

import NavLayout from './components/NavLayout';
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Profile from "./pages/Profile"
import {userProfile} from "./pages/Profile"


const userLoader = async () => {
  const response = await fetch("http://localhost:4000/users")
  return response.json()
}


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavLayout />}>
      <Route index element={<Home />} loader={userLoader}/>
      <Route path="/profile/:id" element={<Profile />} loader = {userProfile}/>
      <Route path="about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router ={router}/>
  );
}

export default App;
