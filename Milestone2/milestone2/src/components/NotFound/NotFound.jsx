import React from 'react'
import Main from '../Main/Main'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <>
        <Main name='Page Not Found'/>
        <div className="container not-found">
            <div className="row">
            <div className="col-8">
            <h1>The page you are looking for does not exist</h1>
            <p>Looking for something else?</p>
            <Link className='return' to="/home">Return Home</Link>
            </div>
            <div className="col-4">
            <img className='notimg  d-lg-block ' src={"../public/03.png"} alt="" />
            </div>
            </div>
        </div>
    </>
  )
}

export default NotFound