import React,{useState} from 'react'
import { useLoaderData, Link } from 'react-router-dom';
import CarsCard from './CarsCard';


function CarsList({setGarage,garage, allCars, onDelete, bool, brokeAlert}) {

  const cars = allCars
  

  const carsList = cars.map((car) => {
    return <CarsCard key={car.id} car={car} setGarage={setGarage} garage={garage} onDelete={onDelete} bool={bool} brokeAlert={brokeAlert}/>
  })

  return (
    <div>
      <ul className='cards'>{carsList}</ul>
    </div>
  )
}
export default CarsList;