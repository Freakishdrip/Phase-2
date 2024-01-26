import React, { useState } from 'react'

function AddCarForm({setGarage, garage, allCars, onAddCar}) {

  const [make, setMake] = useState("")
  const [model, setModel] = useState("")
  const [mpg, setMPG] = useState("")
  const [year, setYear] = useState("")
  const [image, setImage] = useState("")

  function handleMake(e){
    setMake(e.target.value)
  }
  function handleModel(e){
    setModel(e.target.value)
  }
  function handleMPG(e){
    setMPG(e.target.value)
  }
  function handleYear(e){
    setYear(e.target.value)
  }
  function handleImage(e){
    setImage(e.target.value)
  }


  function handleAddCar(e){
    e.preventDefault()
    const newCar = {
        id: (allCars.length + 1).toString(),
        make: make,
        model: model,
        mpg: mpg,
        year: year,
        image: image,
    }
    fetch("http://localhost:4000/cars", {
        method: "POST",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify(newCar)
    })
    .then((response) => response.json())
    .then((car) => onAddCar(car))
    onAddCar(newCar)
}

    return (
      <div>
         <form className='formClass' onSubmit={handleAddCar}>
          <input type="text" name="make" placeholder="Make" onChange={(e)=>handleMake(e)}/>
          <input type="text" name="model" placeholder="Model" onChange={(e)=>handleModel(e)}/>
          <input type="text" name="MPG" placeholder="Miles Per Gallon" onChange={(e)=>handleMPG(e)}/>
          <input type="text" name="year" placeholder="Year" onChange={(e)=>handleYear(e)}/>
          <input type="text" name="image" placeholder="ImageURL" onChange={(e)=>handleImage(e)}/>
          <input type="submit" value="Add"/>
        </form>
      </div>
  )
}

export default AddCarForm;