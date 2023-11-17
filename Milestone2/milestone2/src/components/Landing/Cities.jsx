import React from 'react'

function Cities({name="agra",buyers=900,sellers=70,twitter="omnishop_agra",city="Agra"}) {
  return (
    <>
        <div className="card city">
            <img className="card-img-top" src={"../public/"+name+".jpg"} />
            <div className="card-body">
                <h3 className="card-title"> {city} </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <ion-icon name="person" className="cityicon"></ion-icon>
                        <small> {buyers}+ Happy Buyers</small>
                    </li>
                    <li className="list-group-item">
                        <ion-icon name="shield-checkmark" className="cityicon"></ion-icon>
                        <small> {sellers}+ Top Sellers </small>
                    </li>
                    <li className="list-group-item">
                        <ion-icon name="logo-twitter" className="cityicon"></ion-icon>
                        <small>@{twitter}</small>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Cities