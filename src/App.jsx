import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/vans/Vans";
import VanDetails from "./pages/vans/VanDetails"
import NotFound from "./pages/NotFound"
import "./server"
import Layout from "./components/Layout";
import Income from "./pages/Host/Income";
import VansHost from "./pages/Host/VansHost";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import Dashboard from "./pages/Host/Dashboard";
import VansHostDetails from "./pages/Host/VansHostDetails";
import DetailsLayout from "./components/DetailsLayout";
import VansHostPricing from "./pages/Host/VansHostPricing";
import VansHostPhotos from "./pages/Host/VansHostPhotos";

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
                        <Route path="vans" element={<VansHost/>}/>

                        <Route path="vans/:id" element={<DetailsLayout/>}>
                            <Route index element={<VansHostDetails/>}/>
                            <Route path="pricing" element={<VansHostPricing/>}/>
                            <Route path="photos" element={<VansHostPhotos/>}/>
                        </Route>

                        <Route path="reviews" element={<Reviews/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Route>
                </Route>
            </Routes>
        </Router>
    )
}


export default App
