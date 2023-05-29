import HostNavBar from "./HostNavBar";
import {Outlet} from "react-router-dom";

export function HostLayout() {
    return (
        <>
            <HostNavBar/>
            <Outlet/>
        </>
    )
}