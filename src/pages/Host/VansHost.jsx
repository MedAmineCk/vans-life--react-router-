import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function VansHost() {
    const [vans, setVans] = useState([]);
    useEffect(() => {
        return () => {
            fetch('/api/host/vans')
                .then(res => res.json())
                .then(data => setVans(data.vans))
        };
    }, []);

    const vansElements = vans.map(van => (
        <Link to={`/host/vans/${van.id}`} key={van.id} className="van-item">
            <div className="thumbnail"><img src={van.imageUrl} alt={van.name}/></div>
            <div className="content">
                <div className="name">{van.name}</div><br/>
                <div className="price">${van.price}/day</div>
            </div>
        </Link>
    ))

    return (
        <>
            <h1>Your listed vans</h1>
            <div className="vans_host-container">
                {vans.length > 0 ?  vansElements : <h1>Loading ..</h1>}
            </div>
        </>
    )
}