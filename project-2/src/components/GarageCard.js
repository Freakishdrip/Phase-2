import React,{ useState }  from 'react'

function GarageCard({garageCar,onRemove, editObj, setEditObj,setEditing, editing}) {
  console.log("inside garage card")
 

    function handleClick(){
      onRemove(garageCar.id)
      console.log(garageCar)
    }
    // function handleChangeCar(){
    //   const updateCarObj= {
    //     make: garageCar.make,
    //     model: garageCar.model,
    //     year: garageCar.year,
    //     mpg: garageCar.mpg
    //   }

    //   fetch(`http://localhost:4000/cars/${garageCar.id}`,{
    //     method: "PATCH",
    //     headers: {"Content-Type":"application/json"},
    //     body: JSON.stringify(updateCarObj),
    //   })
    //   .then((resp) => resp.json())
    //   .then(handleUpdateCar)
    // }
    // console.log(editObj)
    function setEditingAndEditObj(){
      setEditObj(garageCar)
      setEditing(!editing)
      console.log(garageCar)
    }
    
    return (
    <div>
        <ul className="card">
            <img src={garageCar.image} alt={garageCar.model}></img>
            <h3>Make: {garageCar.make}</h3>
            <h4>Model: {garageCar.model}</h4>
            <h4>Year: {garageCar.year}</h4>
            <h5>Highway Economy: {garageCar.mpg} mpg</h5>
            
            <button onClick={()=>handleClick()}>Remove</button>
            <button id="editCar" onClick={() => setEditingAndEditObj()}>Edit</button>

        </ul>
    </div>
  )
}

export default GarageCard;