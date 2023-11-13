import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="">
    <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
        <a class="navbar-brand" href="index.html">OmniShop</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navhide">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navhide">
            <ul class="navbar-nav "  >
                <li class="nav-item">
                    <a href="index.html" class="nav-link navoptions">Home</a>
                </li>
                <li class="nav-item">
                    <a href="shop.html" class="nav-link navoptions">Shop</a>
                </li>
                <li class="nav-item">
                    <a href="contact.html" class="nav-link navoptions">Contact Us</a>
                </li>
                <li class="nav-item">
                    <a  href="profile.html" class="nav-link navoptions d-lg-inline d-none">
                      PROF
                        {/* <img style="transform: translateY(4px);" class=" " src="resources/img/user.svg" alt=""> */}
                    </a>
                    <a href="profile.html" class="d-lg-none nav-link navoptions active">Profile</a>
                </li>
                <li class="nav-item">
                    <a  href="cart.html" class="nav-link navoptions d-lg-inline d-none">
                        {/* <img style="transform: translateY(4px);" class="svg" src="resources/img/cart.svg" alt=""> */}
                        CART
                    </a>
                    <a href="cart.html" class="d-lg-none nav-link navoptions ">Cart</a>
                </li>
            </ul>
            
        </div>
    </nav>
</div>
  );
}

export default App;
