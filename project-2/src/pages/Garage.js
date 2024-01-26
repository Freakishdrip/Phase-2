import React,{useState, useEffect} from 'react';
import GarageList from "../components/GarageList"
import AddCarForm from '../components/AddCarForm';
import EditCarForm from '../components/EditCarForm';



function Garage({garage,setGarage, onRemove, allCars, onAddCar, bool, brokeAlert, editObj, setEditObj, setAllCars}){
  
  // const [bool, setBool] = useState(true)

  // function brokeAlert(garage){
  //   if(garage.length() <= 0){
  //     setBool(true)
  //   } else{
  //     setBool(false)
  //   }
  // }
  //console.log("inside Garage")
  // console.log(bool)
  // console.log([garage])
  brokeAlert(garage)
  const [editing, setEditing] = useState(false)
  // function handleEditButton(){
  //   setEditing(!editing)
  // }


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
        
        {/* <button id="getTheWrenchButton"onClick={handleEditButton}>Honey, get the wrench!</button> */}
        <div>
        {editing ? 
          <EditCarForm allCars={allCars} editObj={editObj} onAddCar={onAddCar} setAllCars={setAllCars} setGarage={setGarage} garage={garage}/> 
        : 
          <div>
            <h3 className='FormDescriber'>Add a new car</h3>
            <AddCarForm garage={garage} setGarage={setGarage} allCars={allCars} onAddCar={onAddCar} brokeAlert={brokeAlert}/>
          </div>
        }
        </div>
        <GarageList 
        garage={garage} 
        setGarage={setGarage} 
        onRemove={onRemove} 
        brokeAlert={brokeAlert} 
        setEditObj={setEditObj} 
        editObj={editObj} 
        editing={editing} 
        setEditing={setEditing}/>
      </div>
    }
  </div>
  )
};

export default Garage;