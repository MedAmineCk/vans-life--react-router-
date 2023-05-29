import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function VanDetails() {

    const [van, setVan] = useState(null);
    const params = useParams()
    console.log(params)

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id]);

    console.log(van)
    return (
        <div className="van-details">
            {van ? (
                <div className="section-container">
                    <div className="cover">
                        <img src={van.imageUrl}/>
                    </div>
                    <h1>{van.name}</h1>
                    <p>{van.description}</p>
                </div>
            ) : <h1>Loading ..</h1>}
        </div>

    )
}