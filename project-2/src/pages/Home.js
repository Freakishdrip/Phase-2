import React, { useState } from 'react';
import CarsList from "../components/CarsList"
import { useLoaderData, Link } from 'react-router-dom';




function Home({garage,setGarage,allCars,onDelete,bool, brokeAlert}){

    

    return (
        <div>
            <h1>Car Cataloge</h1>
            <form className="formClass">
                <input placeholder='Search here...'/>
            </form>
            <CarsList  garage={garage} setGarage={setGarage} allCars={allCars} onDelete={onDelete} bool={bool} brokeAlert={brokeAlert}/>
        </div>
    );
};

export default Home;