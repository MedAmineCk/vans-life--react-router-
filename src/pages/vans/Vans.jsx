import {useEffect, useState} from "react";
import {Link, useSearchParams} from "react-router-dom";

function Vans() {

    const [searchParams, setSearchParams]  = useSearchParams();
    const filterType = searchParams.get('type')
    console.log(filterType)

    const [vans, setVans] = useState([]);
    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, []);

    const filtredVans = filterType ? vans.filter(van => van.type.toLowerCase() === filterType) : vans;

    const vanElements = filtredVans.map(van => (
        <div className="van-item" key={van.id}>
            <Link to={`${van.id}`}>
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
                        <button onClick={()=> setSearchParams({type: 'simple'})} className={`filter-item simple ${filterType === 'simple' ? 'selected' : ''}`}>Simple</button>
                        <button onClick={()=> setSearchParams({type: 'luxury'})} className={`filter-item luxury ${filterType === 'luxury' ? 'selected' : ''}`}>Luxury</button>
                        <button onClick={()=> setSearchParams({type: 'rugged'})} className={`filter-item rugged ${filterType === 'rugged' ? 'selected' : ''}`}>Rugged</button>
                    </div>
                    {filterType ? (
                        <Link onClick={()=> setSearchParams({})}  className="clear">Clear Filters</Link>
                    ) : null}

                </div>
                <div className="vans-container">
                    {vanElements.length > 0 ? vanElements : <h1>Loading..</h1>}
                </div>
            </div>
        </div>
    )
}

export default Vans