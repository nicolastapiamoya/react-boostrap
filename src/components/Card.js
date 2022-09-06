import React from 'react'


function Card({ title, imageSource, url }) {
    return (
        <div className="card text-center bg-dark justify-content-center align-items-center">
            <img className="text-center justify-content-center align-items-center" src={imageSource} alt="" height="220" width="220" />
            <div className="card-body text-light">
                <h5>{title}</h5>
                <div className="row">
                    <div className="col">
                        107 m² utiles
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
