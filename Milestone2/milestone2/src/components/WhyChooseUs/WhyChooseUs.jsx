import React from 'react'

function WhyChooseUs() {
  return (
    <section className="why-choose-section">
        <div className="container">
            <div className="row my-5">
                <div className="col-6 col-md-6 col-lg-3 mb-4">
                    <div className="feature">
                        <div className="icon">
                            <img src={"../../public/truck.svg"} alt="Image" className="imf-fluid" />
                        </div>
                        <h3>Fast &amp; Free Shipping</h3>
                        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                </div>
                <div className="col-6 col-md-6 col-lg-3 mb-4">
                    <div className="feature">
                        <div className="icon">
                            <img src={"../../public/bag.svg"} alt="Image" className="imf-fluid" />
                        </div>
                        <h3>Easy to Shop</h3>
                        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                </div>
                <div className="col-6 col-md-6 col-lg-3 mb-4">
                    <div className="feature">
                        <div className="icon">
                            <img src={"../../public/support.svg"} alt="Image" className="imf-fluid" />
                        </div>
                        <h3>24/7 Support</h3>
                        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                </div>
                <div className="col-6 col-md-6 col-lg-3 mb-4">
                    <div className="feature">
                        <div className="icon">
                            <img src={"../../public/return.svg"} alt="Image" className="imf-fluid" />
                        </div>
                        <h3>Hassle Free Returns</h3>
                        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUs