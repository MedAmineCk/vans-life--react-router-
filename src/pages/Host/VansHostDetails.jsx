import {useParams} from "react-router-dom";
import { useState , useEffect} from "react";

export default function VansHostDetails() {
    const {id} = useParams()
    const [details, setDetails] = useState({});
    useEffect(() => {
        return () => {
            fetch(`/api/vans/${id}`)
                .then(res => res.json())
                .then(data => setDetails(data.vans))
        };
    }, []);

    console.log(details)
    
    return (
        <div className="data-container">
            {Object.keys(details).length > 0 ? (
                <div className="container">
                    <br/>
                    <div className="line">
                        <b className="label">Name : </b>
                        <span>{details.name}</span>
                    </div>
                    <br/>
                    <div className="line">
                        <b className="label">Category : </b>
                        <span>{details.type}</span>
                    </div>
                    <br/>
                    <div className="line">
                        <b className="label">Description : </b>
                        <span>{details.description}</span>
                    </div>
                </div>

                ) : <h1>Loading ..</h1>
            }
        </div>
    )
}