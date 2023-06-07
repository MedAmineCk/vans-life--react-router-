import {useOutletContext, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function VansHostPricing() {
    const { currentVan } = useOutletContext()
    return (
        <div className="data-container">
                <div className="container">
                    <br/>
                    <div className="line">
                        <b className="label">Pricing : </b>
                        <span>${currentVan.price}/day</span>
                    </div>
                </div>
        </div>
    )
}