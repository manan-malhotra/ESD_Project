import React from 'react'
import {Link} from 'react-router-dom';
function RecentOrders() {
  return (
    <section class="recent-orders">
        <div class="container pt-5">
            <div class="row">
                <div class="col-md-4 col-8 ">
                    <span>
                        <h6>Your orders</h6>
                    </span>
                </div>
                <div class="col-8">
                    <div class="row">
                        <div class="col-8">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search your orders" aria-label="Search" />
                        </div>
                        <div class="col-4">
                            <button class="btn btn-primary">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-5 mb-5">
                <div class="box">
                    <div class="box-upper p-3 pb-2">
                        <div class="row">
                            <div class="col-md-8 col-12">
                                <div class="row">
                                    <div class="col-4">
                                        <span>Order Placed</span>
                                    </div>
                                    <div class="col-4">
                                        <span>Total Price</span>
                                    </div>
                                    <div class="col-4"></div>
                                    
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <span>9th November</span>
                                    </div>
                                    <div class="col-4">
                                        ₹999.0
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-12">
                                <div class="row">
                                    <div class="col-8">
                                        <span><strong>Order # 555-01293-99</strong></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="box-lower p-3">
                        <div class="row">
                            <div class="col-md-8 col-12 pt-2">
                                <span><strong>Arriving Monday</strong></span>
                            </div>
                            <div class="col-md-4 col-12">
                                <a href="#" class="btn btn-lg btn-warning">Track my package!</a>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-8 col-12">
                                <div class="row">
                                    <div class="col-2">
                                        <div class="order-thumbnail">
                                            <img src="./public/cart1.jpg" alt="Image" class="img-fluid"/>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <Link to="/shop/product/cart1">Highlander Casual Shirt</Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-12">
                                <a href="#" class="mt-3 mt-md-0 btn btn-lg btn-outline-warning">Cancel this delivery</a>
                                <a href="#" class="mt-3 btn btn-lg btn-outline-warning">Leave Seller Feedback</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
  )
}

export default RecentOrders