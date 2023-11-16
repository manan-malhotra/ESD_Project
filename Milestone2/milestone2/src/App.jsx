import { useState } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import { Link, NavLink } from 'react-router-dom'
import img1 from '../public/prod1.jpg'
import Sellers from "./components/Landing/Sellers";
function App() {
	return <>
		<main style={{background: "#343a40!important", height:"270px"}}>
        <div className="container">
            
            <div className="row mt-5">
                <div className="col-md-10 offset-1 mt-5">
                    <h1 >
                        <strong>Your Omni Shop.<br/>For all your needs.</strong></h1>
                            <Link to="/shop" className="mr-2 mt-4  btn btn-lg btn-warning">Let's Shop</Link>
                            <Link to="/profile" className="ml-2 mt-4 btn btn-lg btn-outline-warning">Show my profile</Link>
                </div>
            </div>
        </div>
    	</main>
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
    
	</>
}

export default App;
