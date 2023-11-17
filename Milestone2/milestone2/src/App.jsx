import { useState } from "react";
import "./App.css";
import { Link } from 'react-router-dom'
import Topsellers from "./components/Landing/Section/Topsellers";
import Citysection from "./components/Landing/Section/Citysection";
import Customers from "./components/Landing/Section/Customers";
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
		<Topsellers />
		<Citysection />
        <Customers />
    
	</>
}

export default App;
