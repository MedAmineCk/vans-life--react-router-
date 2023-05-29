import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function Vans() {

    const [vans, setVans] = useState([]);
    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, []);

    const vanElements = vans.map(van => (

        <div className="van-item" key={van.id}>
            <Link to={`/vans/${van.id}`}>
                <div className="thumbnail">
                    <img src={van.imageUrl} alt=""/>
                </div>
                <div className="data-container">
                    <div className="title">{van.name}</div>
                    <div className="price-container">
                        <span className="price">${van.price}</span>
                        <span className="duration">/day</span>
                    </div>
                </div>
                <div className={`label ${van.type}`}>{van.type}</div>
            </Link>
        </div>

    ))

    return (
        <div className="vans">
            <div className="section-container">
                <h1>Explore our van options</h1>
                <div className="filters">
                    <div className="filters-container">
                        <div className="filter-item">Simple</div>
                        <div className="filter-item">Luxury</div>
                        <div className="filter-item">Rugged</div>
                    </div>
                    <div className="clear">Clear Filters</div>
                </div>
                <div className="vans-container">
                    {vanElements}
                </div>
            </div>
        </div>
    )
}

export default Vans