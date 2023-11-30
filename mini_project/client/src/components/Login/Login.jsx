import React, { useState } from 'react'
import "./Login.css"
import { Col, Row } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../Context/UserContext';
function Login() {
const { setUserContext } = useUser();
const { user } = useUser();
const [email, setEmail] = useState('manan@email.com');
const [password, setPassword] = useState('1234asdf');
const navigate = useNavigate();
const handleSubmit =  (e) => {
    e.preventDefault();

    const url = 'http://localhost:8080/api/home/authenticate';
    const data = {
      email:email,
      password:password 
    };

    
      axios.post(url, data)
    .then(response =>{
        console.log('Login successful!');
        toast.success('You have logged in!');
        setUserContext({ email });
        setTimeout(() => {
          navigate('/home');
        }, 1000);
    })
    .catch(
      (error) => {
        if(error.response){
            console.log(error.response.status);
            toast.error('Incorrect roll number or password. Please try again.');
        }else{
            console.log("Band hai")
            toast.error('An unexpected error occurred. Please try again later.');
        }
      }
    );
    
  };

  return (
    <>  
<Row>
<Col><ToastContainer
position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        progressBarStyle={{ background: 'blue' }} 
        pauseOnHover
/></Col>
<Col> <div className="Auth-form-container ml-5">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email</label>
              <input
                type="underline"
                className="form-control mt-1"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value.toLowerCase())}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              <a href="#">Forgot password?</a>
            </p>
          </div>
        </form>
      </div>
</Col>
<Col></Col>
</Row>
       

    </>
  )
}

export default Login