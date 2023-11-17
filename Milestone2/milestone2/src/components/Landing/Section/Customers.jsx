import React from 'react'
import Testimonial from '../Testimonial'

function Customers() {
  return (
    <section class="sectioncustomers container">
        <div class="customers">
            <div class="feature pt-5">
                <h2>
                    We’re nothing without our customers
                </h2>
            </div>
            <div class="container pt-5 pb-5 review">
                <div class="row">
                    <Testimonial name="Divya Mehta" customer="customer-1"/>
                    <Testimonial name="Vivek Gujjar" customer="customer-2"/>
                    <Testimonial name="Bhavna Joshi" customer="customer-3"/>
                </div>
            </div>
        </div>
        </section>
  )
}

export default Customers