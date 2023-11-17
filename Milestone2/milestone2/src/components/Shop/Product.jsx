import React from 'react'
import {Link} from 'react-router-dom'

function Product({name,product,price}) {
  return (
    <div className="col-12 col-md-4 col-lg-3 mb-5">
        <Link className="product-item" to={"./product/"+name+""}>
            <img src={"../public/"+name+".jpg"} className="img-fluid product-thumbnail2" />
            <h3 className="product-title">{product}</h3>
            <strong className="product-price">₹{price}</strong>
            <span className="icon-cross">
                <img src={"../public/cross.svg"}  className="img-fluid" alt="" />
            </span>
        </Link>
    </div>
  )
}

export default Product