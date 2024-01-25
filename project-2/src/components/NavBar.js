import React from 'react';
import {NavLink, Link, Outlet} from "react-router-dom";

function NavBar() {
  return (
    <div >
        <NavLink to="/" className='navbar'>Home</NavLink>
        <Link to="/garage" className='navbar'>Garage</Link>
        <Link to="/about" className='navbar'>About</Link>
        <Link to="/settings" className='navbar'>Settings</Link>
        <main>
          <Outlet/>
        </main>
    </div>
  )
}
export default NavBar;