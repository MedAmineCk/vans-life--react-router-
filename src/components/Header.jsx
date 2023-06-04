import {NavLink, useLocation} from "react-router-dom";
import logo from "../assets/logog.png";

export default function Header() {
    return (
        <header className="flex">
            <div className="section-container">
                <div className="logo">
                    <NavLink to=".">
                        <img src={logo} alt="logo"/>
                    </NavLink>
                </div>
                <nav>
                    <NavLink className={({isActive}) => isActive ? 'active' : null} to="host">Host</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'active' : null} to="about">About</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'active' : null} to="vans">Vans</NavLink>
                </nav>
            </div>
        </header>
    )
}

