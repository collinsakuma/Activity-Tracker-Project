import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar navbar-expand bg-light" style={{background: "gray"}}>
            <div className="container">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/" activeStyle={{fontWeight:"bold", color:"#f52000"}}>Activty Feed</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/profile" activeStyle={{fontWeight:"bold", color:"#f52000"}}>Profile</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/routes" activeStyle={{fontWeight:"bold", color:"#f52000"}}>Routes</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;