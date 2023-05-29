import {Link, useLocation} from "react-router-dom";

export default function HostNavBar() {
    return (
        <div className="section-container">
            <nav className="host-nav">
                <LinkWithActiveClass to="/host">Dashboard</LinkWithActiveClass>
                <LinkWithActiveClass to="/host/income">Income</LinkWithActiveClass>
                <LinkWithActiveClass to="/host/reviews">Reviews</LinkWithActiveClass>
            </nav>
        </div>
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
