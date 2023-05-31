import {BrowserRouter as Router, Routes, Route, Link, useLocation} from "react-router-dom";
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Vans from "./pages/vans/Vans.jsx"
import VanDetails from "./pages/vans/VanDetails.jsx"
import NotFound from "./pages/NotFound.jsx"
import "./server"
import Layout from "./components/Layout";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import {HostLayout} from "./components/HostLayout";
import Dashboard from "./pages/Host/Dashboard";



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="*" element={<NotFound/>}/>
                    <Route path="about" element={<About/>}/>


                    <Route path="vans">
                        <Route index element={<Vans/>}/>
                        <Route path=":id" element={<VanDetails/>}/>
                    </Route>

                    <Route path="host" element={<HostLayout/>}>
                        <Route index element={<Dashboard/>}/>
                        <Route path="income" element={<Income/>}/>
                        <Route path="reviews" element={<Reviews/>}/>
                    </Route>
                </Route>
            </Routes>
        </Router>
    )
}


export default App
