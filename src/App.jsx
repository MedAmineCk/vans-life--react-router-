import {BrowserRouter as Router, Routes, Route, Link, useLocation} from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Vans from "./components/Vans"
import VanDetails from "./components/VanDetails"
import NotFound from "./components/NotFound"
import logo from "./assets/logog.png"
import "./server"

function LinkWithActiveClass({to, children}){
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link className={isActive ? 'active' : ''} to={to}>
            {children}
        </Link>
    )
}

function App() {
    return (
        <Router>
            <header className="flex">
                <div className="section-container">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="logo"/>
                        </Link>
                    </div>
                    <nav>
                        <LinkWithActiveClass to="/about">About</LinkWithActiveClass>
                        <LinkWithActiveClass to="/vans">Vans</LinkWithActiveClass>
                    </nav>
                </div>
            </header>
            <Routes>
                <Route path="/" element={<Home/>}>Home</Route>
                <Route path="/about" element={<About/>}>About</Route>
                <Route path="/vans" element={<Vans/>}>Vans</Route>
                <Route path="/vans/:id" element={<VanDetails/>}>VansDetails</Route>
                <Route path="/*" element={<NotFound/>}>404</Route>
            </Routes>
            <footer>
                <div className="section-container">
                    <p>Ⓒ 2022 #VANLIFE</p>
                </div>
            </footer>
        </Router>
    )
}


export default App
