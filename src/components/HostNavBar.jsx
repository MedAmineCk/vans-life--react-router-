import {NavLink, useLocation} from "react-router-dom";

export default function HostNavBar() {
    return (
        <div className="section-container">
            <nav className="host-nav">
                <NavLink className={({isActive}) => isActive ? 'active' : null} end to="/host">Dashboard</NavLink>
                <NavLink className={({isActive}) => isActive ? 'active' : null} to="/host/income">Income</NavLink>
                <NavLink className={({isActive}) => isActive ? 'active' : null} to="/host/reviews">Reviews</NavLink>
            </nav>
        </div>
    )
}
