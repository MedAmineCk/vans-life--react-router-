import {NavLink} from "react-router-dom";

export default function HostNavBar() {
    return (
        <nav className="host-nav">
            <NavLink className={({isActive}) => isActive ? 'active' : null} end to=".">Dashboard</NavLink>
            <NavLink className={({isActive}) => isActive ? 'active' : null} to="income">Income</NavLink>
            <NavLink className={({isActive}) => isActive ? 'active' : null} to="vans">Vans</NavLink>
            <NavLink className={({isActive}) => isActive ? 'active' : null} to="reviews">Reviews</NavLink>
        </nav>
    )
}
