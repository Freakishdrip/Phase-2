import {NavLink, Link, Outlet} from "react-router-dom"
function NavLayout(){
    return (
        <div>
            <header>
            <nav>
                <h1> Router </h1>
                <NavLink to="/">Home</NavLink>
                <Link to="/about">About</Link>
            </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
export default NavLayout;
