import {useOutletContext, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function VansHostPhotos() {
    const { currentVan } = useOutletContext()

    const imgStyle = {
        width: '150px',
        height: '150px'
    }

    return (
        <div className="data-container">
                <div className="img-container">
                    <br/>
                    <img src={currentVan.imageUrl} alt="image" style={imgStyle}/>
                </div>
        </div>
    )
}