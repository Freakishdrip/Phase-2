import React,{useState, useEffect} from 'react';
import GarageList from "../components/GarageList"
import AddCarForm from '../components/AddCarForm';



function Garage({garage,setGarage, onRemove, allCars, onAddCar, bool, brokeAlert}){
  
  // const [bool, setBool] = useState(true)

  // function brokeAlert(garage){
  //   if(garage.length() <= 0){
  //     setBool(true)
  //   } else{
  //     setBool(false)
  //   }
  // }
  console.log("inside Garage")
  console.log(bool)
  console.log([garage])
  brokeAlert(garage)
  return(
  <div>
    {bool ? 
    <div>
      <h1>The Garage</h1>
      <h3 className='FormDescriber'>Add a new car</h3>
      <AddCarForm garage={garage} setGarage={setGarage} allCars={allCars} onAddCar={onAddCar} brokeAlert={brokeAlert}/>
      <p>Looks like you need to do some shopping!</p>
    </div> 
    : 
    <div>
      <h1>The Garage</h1>
      <h3 className='FormDescriber'>Add a new car</h3>
      <AddCarForm garage={garage} setGarage={setGarage} allCars={allCars} onAddCar={onAddCar} brokeAlert={brokeAlert}/>
      <GarageList garage={garage} setGarage={setGarage} onRemove={onRemove} brokeAlert={brokeAlert}/>
    </div>
    }
  </div>
  )
};

export default Garage;