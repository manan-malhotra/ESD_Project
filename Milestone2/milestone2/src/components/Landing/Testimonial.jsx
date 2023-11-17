import React from 'react'

function Testimonial({name="Bhavna Joshi", customer="customer-3"}) {
  return (
    <>
    <div class="col-md-4 d-md-inline" >
        <p>
        <span class="display-4">&#8220;</span><br/>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis expedita consequatur reprehenderit accusamus fugit mollitia nemo eveniet quasi libero, quidem, repellat ab veritatis explicabo dolorum a necessitatibus.
        </p>
        <cite><img src={"../public/"+customer+".jpg"} class="customer" alt=""/> &mdash; 
            {name}
        </cite>
    </div>
    </>
  )
}

export default Testimonial