import React from 'react'

function Footer({name="OmniFood"}) {
  return (
    <footer>
        
        <div className="container">
            
            <div className="row">
                <div className="col-4 red offset-1 offset-md-2 navbar-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item mt-3">
                            <a href="#" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Refunds</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Career</a>
                        </li>
                    </ul>
                </div>
                <div className="col-6 col-md-4 offset-md-2 mt-3 ">
                    <a href="https://www.facebook.com/">
                        <ion-icon name="logo-facebook" class="footericon" className="footericon"></ion-icon>
                    </a>
                    <a href="https://twitter.com/home">
                        <ion-icon name="logo-twitter" class="footericon" className="footericon"></ion-icon>
                    </a>
                    <a href="https://instagram.com/">
                        <ion-icon name="logo-instagram" class="footericon" className="footericon"></ion-icon>
                    </a>
                </div>
            </div>
                <p className="copyright">
                    Copyright &copy; 2023 by {name}. All rights reserved
                </p>
        </div>
    </footer>
  )
}

export default Footer