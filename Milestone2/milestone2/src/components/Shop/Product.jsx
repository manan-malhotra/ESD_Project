import React from 'react'
import {Link} from 'react-router-dom'

function Product({name,product,price}) {
  return (
    <div class="col-12 col-md-4 col-lg-3 mb-5">
        <Link class="product-item" to={"./product/"+name+"/"+product}>
            <img src={"../public/"+name+".jpg"} class="img-fluid product-thumbnail2" />
            <h3 class="product-title">{product}</h3>
            <strong class="product-price">₹{price}</strong>
            <span class="icon-cross">
                <img src={"../public/cross.svg"}  class="img-fluid" alt="" />
            </span>
        </Link>
    </div>
  )
}

export default Product