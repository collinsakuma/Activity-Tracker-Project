import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/routes">Routes</NavLink>
        </div>
    )
}
export default NavBar;