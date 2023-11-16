import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="heroheading">
        
            <nav className="navbar navbar-expand-lg  navbar-dark bg-dark pr-3 pl-5">
                
                <Link className="navbar-brand" to="/">OmniShop</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navhide">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navhide">
                    <ul className="navbar-nav pr-5 "  >
                        <li className="nav-item">
                            <NavLink to="/home" className="nav-link navoptions">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/shop" className={({isActive}) =>`${isActive ? "active" : "" } nav-link navoptions`}>Shop</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className={({isActive}) =>
                                        ` 
                                        ${isActive ? "active" : "" } nav-link navoptions`
                                    }
                            >Contact Us</NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink  to="/profile" className={({isActive})=>`${isActive?"active":""} nav-link navoptions`}>
                              Profile
                          </NavLink>
                      </li>
                      <li className="nav-item">
                            <NavLink  to="/cart" className={({isActive})=>`${isActive?"active":""} nav-link navoptions`}>  
                              Cart
                            </NavLink>
                      </li>
                    </ul>
                    
                </div>
            </nav>
    </header>
  )
}

export default Header
