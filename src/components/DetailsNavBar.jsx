import {NavLink} from "react-router-dom";

export function DetailsNavBar() {
    return (
        <div className="details_nav-container">
            <NavLink to="." end className={({isActive}) => isActive ? 'active' : null}>Details</NavLink>
            <NavLink to="pricing" className={({isActive}) => isActive ? 'active' : null}>Pricing</NavLink>
            <NavLink to="photos" className={({isActive}) => isActive ? 'active' : null}>Photos</NavLink>
        </div>
    )
}