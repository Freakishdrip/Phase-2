import React,{ useState }  from 'react'

function GarageCard({garageCar,onRemove,brokeAlert}) {
  console.log("inside garage card")
 

    function handleClick(){
      onRemove(garageCar.id)
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

        </ul>
    </div>
  )
}

export default GarageCard;