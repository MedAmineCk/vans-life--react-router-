import {Link, Outlet, Route, Routes, useParams} from "react-router-dom";
import {MdKeyboardBackspace} from "react-icons/md";
import {DetailsNavBar} from "./DetailsNavBar";
import VansHostDetails from "../pages/Host/VansHostDetails";
import VansHostPricing from "../pages/Host/VansHostPricing";
import VansHostPhotos from "../pages/Host/VansHostPhotos";
import {useEffect, useState} from "react";

export default function DetailsLayout() {

    const [currentVan, setCurrentVan] = useState(null);
    const params = useParams()
    console.log(params)

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [params.id]);

    console.log({currentVan})

    if (!currentVan) {
        return <h1>Loading...</h1>
    }
    return (
        <section className="vans_host_details-container">
            <Link to=".." relative="path" className="back-link">
                <MdKeyboardBackspace/>
                Back to all vans</Link>
            <div className="details-container">
                    <div className="header">
                        <div className="thumbnail">
                            <img src={currentVan.imageUrl} alt={currentVan.name}/>
                        </div>
                        <div className="content">
                            <div className="labelButton"></div>
                            <h3 className="name">{currentVan.name}</h3><br/>
                            <div className="price">${currentVan.price}/day</div>
                        </div>
                    </div>
                <DetailsNavBar/>
                <Outlet context={{currentVan}}/>
            </div>
        </section>
    )
}