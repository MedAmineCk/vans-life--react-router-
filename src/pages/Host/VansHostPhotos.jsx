import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function VansHostPhotos() {
    const {id} = useParams()
    const [photo, setPhoto] = useState(null);
    useEffect(() => {
        return () => {
            fetch(`/api/vans/${id}`)
                .then(res => res.json())
                .then(data => setPhoto(data.vans.imageUrl))
        };
    }, []);

    console.log(photo)

    const imgStyle = {
        width: '150px',
        height: '150px'
    }

    return (
        <div className="data-container">
            {photo ? (
                <div className="img-container">
                    <br/>
                    <img src={photo} alt="image" style={imgStyle}/>
                </div>

            ) : <h1>Loading ..</h1>
            }
        </div>
    )
}