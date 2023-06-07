import {useOutletContext} from "react-router-dom";

export default function VansHostDetails() {

    const { currentVan } = useOutletContext()
    
    return (
        <div className="data-container">
            {Object.keys(currentVan).length > 0 ? (
                <div className="container">
                    <br/>
                    <div className="line">
                        <b className="label">Name : </b>
                        <span>{currentVan.name}</span>
                    </div>
                    <br/>
                    <div className="line">
                        <b className="label">Category : </b>
                        <span>{currentVan.type}</span>
                    </div>
                    <br/>
                    <div className="line">
                        <b className="label">Description : </b>
                        <span>{currentVan.description}</span>
                    </div>
                </div>

                ) : <h1>Loading ..</h1>
            }
        </div>
    )
}