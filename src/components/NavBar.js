import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar navbar-expand" style={{background: "gray"}}>
            <div className="container">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Activty Feed</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/profile">Profile</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/routes">Routes</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;