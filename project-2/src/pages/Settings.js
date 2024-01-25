import React from 'react';

function Settings(){

  function handleClick(){
    let element = document.body;
    element.classList.toggle("dark-mode")

  }

    return (
        <div>
            <h1>You've reached the settings page</h1>
            <button onClick={handleClick}>Light Switch</button>
        </div>
    );
};

export default Settings;