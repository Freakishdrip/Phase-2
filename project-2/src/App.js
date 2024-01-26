import {useEffect, useState} from "react";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import About from "./pages/About";
import Garage from "./pages/Garage";
import Settings from "./pages/Settings";
import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";





function App() {
  const [garage, setGarage] = useState([])
  const [allCars, setAllCars] = useState([])
  const [bool, setBool] = useState(true)

  const [searchQuery, setSearchQuery] = useState("")

  const [editObj, setEditObj] = useState([])
  console.log(editObj)
  
  // need a new state for all cars belowe my garage and here i need a get request to adjust that state, problem of page scrolling up was due to rerender from car loader
  useEffect(() => {
    fetch("http://localhost:4000/cars")
    .then((resp) => resp.json())
    .then((cars) => setAllCars(cars))
    //console.log(allCars)//this one returns an empty array

    return()=>{
      console.log("cleanup time")
    }

  }, [])
  
  //console.log(allCars) // outside of the useEffect it returns a complete array
  function brokeAlert(garage){
    //console.log(garage)
    if(garage.length <= 0){ // if true display ur broke if false display the car list
      setBool(true)
      console.log("set to true")
    }else{
      setBool(false)
      console.log("set to false")
    }
  }

  //console.log(searchQuery)

  const results = allCars?.filter((car) => (
    car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
    car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
    car.year.toLowerCase().includes(searchQuery.toLowerCase()) ||
    car.mpg.toLowerCase().includes(searchQuery.toLowerCase())
  ))
  console.log(results)

  function onDelete(id){
    const newCar = allCars.filter((car) => car.id !== id)
    const newGarage = garage.filter((kar) => kar.id !== id)
    setAllCars(newCar)
    setGarage(newGarage)
    brokeAlert(garage)
    
  }
  function onRemove(id){
    const newGarage = garage.filter((car) => car.id !== id)
    setGarage(newGarage)
    brokeAlert(garage)
    // console.log(bool)
    // console.log(garage)
  }
  const onAddCar = (newCar) => {
    setAllCars([...allCars, newCar])
    brokeAlert(garage)
    // console.log(bool)
  }
  // function onUpdate(id){
  //   setAllCars(allCars.map(car => {
  //     if()
  //   }))
  // }
    
  
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavBar />}>
        <Route index element={
          <Home garage={garage}
            setGarage={setGarage} 
            allCars={results} 
            onDelete={onDelete} 
            bool={bool} 
            brokeAlert={brokeAlert}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}/>}/>

        <Route path="/garage" element={
          <Garage 
            garage={garage} 
            setGarage={setGarage} 
            onRemove={onRemove} 
            allCars={allCars} 
            setAllCars={setAllCars}
            onAddCar={onAddCar} 
            bool={bool} 
            brokeAlert={brokeAlert}
            editObj={editObj}
            setEditObj={setEditObj}/>}/>

        <Route path="/about" index element={<About />} />
        <Route path="/settings" element={<Settings />}/>
        <Route path="*" element={<NotFound/>} />
      </Route>
    )
  )

  return (
      <RouterProvider router = {router} />
  );
}

export default App;
