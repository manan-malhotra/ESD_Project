import React from 'react'
import Cities from '../Cities'

function Citysection() {
  return (
    <section className="cities" id="cities">
            <div className="feature pt-5">
                <h2>we’re currently in these cities</h2>
            </div>
            <div className="container-fluid">
                <div className="card-deck ">
                    <div className="col-xl-3 col-lg-5 offset-lg-1 offset-xl-0 col-sm-6 col-12 mb-3">
                        <Cities />
                    </div>
                    <div className="col-xl-3 col-lg-5 col-sm-6 col-12 mb-3">
                        <Cities name="delhi" buyers="1600" sellers="90" twitter="omnishop_delhi" city="Delhi" />
                    </div>
                    <div className="col-xl-3 col-lg-5 offset-lg-1 offset-xl-0 col-sm-6 col-12 mb-3">
                        <Cities name="mumbai2" buyers="1900" sellers="120" twitter="omnishop_mumbai" city="Mumbai" />
                    </div>
                    <div className="col-xl-3 col-lg-5 col-sm-6 col-12 mb-3">
                        <Cities name="chennai" buyers="700" sellers="60" twitter="omnishop_chennai" city="Chennai" />
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Citysection