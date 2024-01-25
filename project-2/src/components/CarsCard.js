import React,{ useState }  from 'react'


function CarsCard({car,setGarage,garage,onDelete,bool, brokeAlert}) {
    
  function handleClick(){
    fetch(`http://localhost:4000/cars/${car.id}`, {
      method: "DELETE",
    })
    onDelete(car.id)

  }


  function handleButton(e){
      e.preventDefault()
      console.log(car)
      setGarage([...garage, car])//send to garage list
    brokeAlert([garage])
  }
  //brokeAlert(garage)
  console.log([garage])
  return (
    <div>
      <li className="card">
          <img src={car.image} alt={car.model}></img>
          <h2>Make: {car.make}</h2>
          <h3>Model: {car.model}</h3>
          <h3>Year: {car.year}</h3>
          <h3>Highway Economy: {car.mpg} mpg</h3>
          
          <button type="submit" value={car} onClick={handleButton}>Buy Car</button>
          <button type="submit" value={car} onClick={handleClick}>Delete Perminately</button>
          
      </li>
    </div>
  )
}

export default CarsCard;