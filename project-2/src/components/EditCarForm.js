import React,{useState} from 'react'

function EditCarForm({editObj, onAddCar, allCars, setAllCars, setGarage, garage}) {
  console.log(editObj)
  
  const [make, setMake] = useState(editObj.make)
  const [model, setModel] = useState(editObj.model)
  const [year, setYear] = useState(editObj.year)
  const [mpg, setMPG] = useState(editObj.mpg)
  const [image, setImage] = useState(editObj.image)

  function handleMake(e){
    setMake(e.target.value)
  }
  function handleModel(e){
    setModel(e.target.value)
  }
  function handleYear(e){
    setYear(e.target.value)
  }
  function handleMPG(e){
    setMPG(e.target.value)
  }
  function handleImage(e){
    setImage(e.target.value)
  }
  
  function handleEditCar(e){
    e.preventDefault()
    console.log(editObj.id)
    fetch(`http://localhost:4000/cars/${editObj.id}`, {
        method: "PATCH",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({

          make: make,
          model: model,
          year: year,
          mpg: mpg,
          image: image
        })
    })
    .then((response) => response.json())
    .then((editedCar) => {
      console.log(garage)
      console.log(editedCar)
      setGarage(garage.map((car)=>{
        if(car.id === editedCar.id){
          return editedCar
        }
        else{
          return car
        }
      }))
      console.log(garage)
      setAllCars(allCars.map((car) => {
      if(car.id === editedCar.id){
        return editedCar
      }else{
        return car
      }
    })
    )})
}
  function consoleD(){
    console.log("Clicked")
    console.log(editObj)
  }
  
  return (
  <div> 
    <button onClick={consoleD}>test for editObj</button>
    <form className='formClass' onSubmit={handleEditCar}>
      <input type="text" name="make" placeholder="Make" value={make} onChange={(e)=>handleMake(e)}/>
      <input type="text" name="model" placeholder="Model" value={model} onChange={(e)=>handleModel(e)}/>
      <input type="text" name="MPG" placeholder="Miles Per Gallon" value={mpg} onChange={(e)=>handleMPG(e)}/>
      <input type="text" name="year" placeholder="Year" value={year} onChange={(e)=>handleYear(e)}/>
      <input type="text" name="image" placeholder="ImageURL" value={image} onChange={(e)=>handleImage(e)}/>
      <input type="submit" value="Add"/>
    </form>
  </div>
  )
}
export default EditCarForm;