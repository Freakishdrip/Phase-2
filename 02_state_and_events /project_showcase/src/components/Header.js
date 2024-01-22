<<<<<<< HEAD
import React,{useState} from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)
  function handleClick(){
=======
import React, {useState} from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  function handleClick(){
    debugger;
>>>>>>> 91ed2ab935e293be8535b2a91b43d5bbd7b855e4
    console.log(isDarkMode)
    setIsDarkMode(!isDarkMode)
  }
  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleClick}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
    </header>
  );
}

export default Header;
