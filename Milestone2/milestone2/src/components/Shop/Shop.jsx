import React from 'react'
import Main from '../Main/Main'
import Product from './Product'

function Shop() {
  return (
    <>
		<Main name="Shop" />
		<section class="product-section">
        <div class="container">

            <div class="row">
                {/* <!-- Start Column 1 --> */}
                    <Product name="cart1" product="Casual T-shirt" price="349.00"/>
					{/* <!-- End Column 1 --> */}
					{/* <!-- Start Column 2 --> */}
					<Product name="cart2" product="Indian Jersey" price="549.00"/>
					{/* <!-- End Column 2 --> */}
					{/* <!-- Start Column 3 --> */}
					<Product name="cart3" product="Regular Kurti" price="999.00"/>
					{/* <!-- End Column 3 --> */}
					{/* <!-- Start Column 4 --> */}
					<Product name="cart4" product="Kurti & Dupatta" price="1349.00"/>
					{/* <!-- End Column 4 --> */}
                    {/* <!-- Start Column 5 --> */}
					<Product name="cart5" product="Casual Shirt" price="349.00"/>
					{/* <!-- End Column 5 --> */}
                    {/* <!-- Start Column 6 --> */}
					<Product name="cart6" product="Formal Shirt" price="349.00"/>
					{/* <!-- End Column 6 --> */}
                    {/* <!-- Start Column 7 --> */}
					<Product name="cart7" product="Kids Shirt" price="349.00"/>
					{/* <!-- End Column 7 --> */}
                    {/* <!-- Start Column 8 --> */}
					<Product name="cart8" product="Girls Dress" price="749.00"/>
					{/* <!-- End Column 8 --> */}
            </div>

        </div>

    </section>
    </>
  )
}

export default Shop