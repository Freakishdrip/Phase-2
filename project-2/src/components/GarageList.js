import React from 'react'
import GarageCard from './GarageCard'

function GarageList({garage, onRemove,brokeAlert}) {

    const garageCars = garage

    

    const garageList = garageCars.map((garageCar) => {
        return <GarageCard key={garageCar.id} garageCar={garageCar} onRemove={onRemove} brokeAlert={brokeAlert}/>
      })

  return (
    <div>
        <ul>
            
            {garageList}
        </ul>
    </div>
  )
}
export default GarageList;