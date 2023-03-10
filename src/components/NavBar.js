import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar({ formToggle }) {
    const [hidden, setHidden] = useState(false);
    
    return (
        <nav className="navbar navbar-expand bg-light header-padding" style={{background: "gray"}}>
            <div className="container">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink onClick={() => setHidden(false)} className="nav-link" exact to="/" activeStyle={{fontWeight:"bold", color:"#f52000"}}>Activty Feed</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink onClick={() => setHidden(true)} className="nav-link" exact to="/profile" activeStyle={{fontWeight:"bold", color:"#f52000"}}>Profiles</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink onClick={() => setHidden(true)} className="nav-link" to="/routes" activeStyle={{fontWeight:"bold", color:"#f52000"}}>Routes</NavLink>
                    </li>
                </ul>
                <div className={hidden ? "hidden" : ""}>
                        <button className ="nav-link button-link" onClick={formToggle} style={{fontWeight:"normal", color:"#f52000"}}>New Activity</button>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;