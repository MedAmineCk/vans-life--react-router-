import HostNavBar from "./HostNavBar";
import {Outlet} from "react-router-dom";

export default function HostLayout() {
    return (
        <>
            <div className="section-container">
                <HostNavBar/>
                <Outlet/>
            </div>
        </>
    )
}