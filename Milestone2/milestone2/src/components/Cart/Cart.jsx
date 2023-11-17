import React from 'react'
import Main from '../Main/Main'
import Item from './Item'

function Cart() {
  return (
    <>
      <Main name="Cart" />
      <section className="cart-table">
        <div className="container">
            <div className="row mb-5">
                <form className="col-md-12" method="post">
                  <div className="site-blocks-table">
                    <table className="tr" >
                      <thead>
                        <tr>
                          <th className="table-product-thumbnail">Product</th>
                          <th className="table-product-name">Brand</th>
                          <th className="table-product-price">Price</th>
                          <th className="table-product-quantity">Quantity</th>
                          <th className="table-product-total">Total</th>
                          <th className="table-product-remove">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        <Item id="cart1"/>
                        <Item id="cart2"/>
                        <Item id="cart3"/>
                        <Item id="cart4"/>
                        <Item id="cart5"/>
                        <Item id="cart6"/>
                        <Item id="cart7"/>
                        <Item id="cart8"/>
                        
                        
        
                        <tr>
                          <td className="product-thumbnail">
                            <img style={{maxWidth: "0%"}} src="./public/cart2.jpg" alt="Image" className="img-fluid" />
                          </td>
                          
                        </tr>
                        
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>
              <div className="row mb-5">
                <div className="col-md-6">
                  <div className="row mb-5">
                    <div className="col-md-6 mb-3 mb-md-0">
                      <a href="index.html" className="btn btn-black btn-lg btn-warning">Update Cart</a>
                    </div>
                    <div className="col-md-6">
                      <a href="shop.html" className="btn btn-outline-black btn-lg btn-light">Continue Shopping</a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <label className="h4" htmlFor="coupon">Coupon</label>
                      <p>Enter your coupon code if you have one.</p>
                    </div>
                    <div className="col-md-8 mb-3 mb-md-0">
                      <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code" />
                    </div>
                    <div className=" col-md-4">
                      <a href="#" className="coupon btn btn-light btn-lg">Apply Coupon</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pl-5">
                  <div className="row justify-content-end">
                    <div className="col-md-7">
                      <div className="row">
                        <div className="col-md-12 text-right border-bottom mb-5">
                          <h3 className=" h4 text-uppercase">Cart Totals</h3>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <span className="">Subtotal</span>
                        </div>
                        <div className="col-md-6 text-right">
                          <strong className="">₹2546.00</strong>
                        </div>
                      </div>
                      <div className="row mb-5">
                        <div className="col-md-6">
                          <span className="">Total</span>
                        </div>
                        <div className="col-md-6 text-right">
                          <strong className="">₹2546.00</strong>
                        </div>
                      </div>
        
                      <div className="row">
                        <div className="col-md-12">
                          <a className="btn btn-black btn-lg btn-warning" >Checkout</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </section>
    </>
  )
}

export default Cart