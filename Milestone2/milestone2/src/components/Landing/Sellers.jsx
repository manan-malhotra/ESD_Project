import React from 'react'
import { Link } from 'react-router-dom'

function Sellers({name="prod1"}) {
  return (
    <>
        <div className="mb-3 col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="container">
                <Link to="/shop">
                    <img src={'../public/'+name+'.jpg'} alt=""/>
                </Link>
            </div>
        </div>
    </>
  )
}

export default Sellers