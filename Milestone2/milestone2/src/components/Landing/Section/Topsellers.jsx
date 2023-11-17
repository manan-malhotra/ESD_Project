import React from 'react'
import Sellers from '../Sellers'

function Topsellers() {
  return (
    <section className="sectiontopsellers">
        <div className="products">
            <div >
                <div className="container-fluid">
                    <div className="row">
                        <Sellers name="prod1"/>
                        <Sellers name="prod2"/>
                        <Sellers name="prod3"/>
                        <Sellers name="prod4"/>
                    </div>
                    <div className="row">
                        <Sellers name="prod5"/>
						<Sellers name="prod6"/>
						<Sellers name="prod7"/>
						<Sellers name="prod8"/>
                    </div>
                        
                </div>
            </div>
        </div>
    	</section>
  )
}

export default Topsellers