import React, { useEffect, useState } from 'react'
import Main from '../Main/Main'
import Item from './Item'
import { Link } from 'react-router-dom'
import cart from '../../services/cart'

function Cart() {
const [total, setTotal] = useState(1447)
const id = "cart1";
const fetchData = () => {
        window.scrollTo(0,0);
        cart.getPrice()
        .then((response)=>{
            console.log(response.data)
            setTotal(response.data.price)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    useEffect(() => {
      fetchData();
   }, []);
  
  function sub(x){
    setTotal(total-x);
  }
  function add(x){
    setTotal(Number(total)+Number(x));
  }
  return (
    <>    
      {/* <h1>{data.cart1}</h1> */}
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
                        <Item id="cart1" subTotal={sub} addTotal={add}/>
                        <Item id="cart2" subTotal={sub} addTotal={add}/>
                        <Item id="cart3" subTotal={sub} addTotal={add}/>
                        <Item id="cart4" subTotal={sub} addTotal={add}/>
                        <Item id="cart5" subTotal={sub} addTotal={add}/>
                        <Item id="cart6" subTotal={sub} addTotal={add}/>
                        <Item id="cart7" subTotal={sub} addTotal={add}/>
                        <Item id="cart8" subTotal={sub} addTotal={add}/>
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
                  {/* <div className="row mb-5">
                    <div className="col-md-6 mb-3 mb-md-0">
                      <Link to="/home" className="btn btn-black btn-lg btn-warning">Update Cart</Link>
                    </div>
                    <div className="col-md-6">
                      <Link to="/shop" className="btn btn-outline-black btn-lg btn-light">Continue Shopping</Link>
                    </div>
                  </div> */}
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
                          <strong className="">₹{(Number(total)).toFixed(2)}</strong>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <span className="">Taxes</span>
                        </div>
                        <div className="col-md-6 text-right">
                          <strong className="">₹{(Number(total)*0.1).toFixed(2)}</strong>
                        </div>
                      </div>
                      <div className="row mb-5">
                        <div className="col-md-6">
                          <span className="">Total</span>
                        </div>
                        <div className="col-md-6 text-right">
                          <strong className="">₹{(Number(total)*1.1).toFixed(2)}</strong>
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