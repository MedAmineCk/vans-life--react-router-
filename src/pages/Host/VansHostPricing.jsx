import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function VansHostPricing() {
    const {id} = useParams()
    const [pricing, setPricing] = useState(null);
    useEffect(() => {
        return () => {
            fetch(`/api/vans/${id}`)
                .then(res => res.json())
                .then(data => setPricing(data.vans.price))
        };
    }, []);

    console.log(pricing)

    return (
        <div className="data-container">
            {pricing ? (
                <div className="container">
                    <br/>
                    <div className="line">
                        <b className="label">Pricing : </b>
                        <span>${pricing}/day</span>
                    </div>
                </div>

            ) : <h1>Loading ..</h1>
            }
        </div>
    )
}