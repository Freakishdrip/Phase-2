import React, { useState } from 'react';
import CarsList from "../components/CarsList"
import SearchBar from "../components/SearchBar"




function Home({garage,setGarage,allCars,onDelete,bool, brokeAlert, setSearchQuery,searchQuery}){

  
    return (
        <div>
            <h1>Car Cataloge</h1>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <CarsList  garage={garage} setGarage={setGarage} allCars={allCars} onDelete={onDelete} bool={bool} brokeAlert={brokeAlert}/>
        </div>
    );
};

export default Home;