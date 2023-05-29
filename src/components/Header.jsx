import {Link, useLocation} from "react-router-dom";
import logo from "../assets/logog.png";

export default function Header() {
    return (
        <header className="flex">
            <div className="section-container">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="logo"/>
                    </Link>
                </div>
                <nav>
                    <LinkWithActiveClass to="/host">Host</LinkWithActiveClass>
                    <LinkWithActiveClass to="/about">About</LinkWithActiveClass>
                    <LinkWithActiveClass to="/vans">Vans</LinkWithActiveClass>
                </nav>
            </div>
        </header>
    )
}

function LinkWithActiveClass({to, children}){
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link className={isActive ? 'active' : ''} to={to}>
            {children}
        </Link>
    )
}
