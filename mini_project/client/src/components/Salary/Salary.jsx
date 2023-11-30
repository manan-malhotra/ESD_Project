import React, { useEffect, useState } from 'react'
import { useUser } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import { Col, Container, Row,  } from 'react-bootstrap';
import { toast,ToastContainer } from 'react-toastify';

function Salary() {
const { user } = useUser();
const { setUserContext } = useUser();
const [email,setEmail] = useState('');
const [department,setDepartment] = useState('Sales');
const navigate = useNavigate();
const handleSubmit =  (e) => {
    e.preventDefault();
    console.log(e);
    if(email.includes("@email.com")){
        navigate('/salary/employee/'+email.split("@")[0]);
    }else{
    toast.error('Enter a @email.com address');
    }
}
const handleSubmitDept =  (e) => {
    e.preventDefault();
    console.log("DEPT"+department);
    navigate('/salary/dept/'+department);
    
toast.success('Hello');
}
useEffect(() => {
    if (user && user.email != null) {
    }else{
        navigate('/');
    }
},[user]);
  
return (
    <>
    <ToastContainer
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
/>
        <Row>
            <Col className='pt-5'>
            <Container>
            <form onSubmit={handleSubmit}>
                                <div class="row gx-3 mb-3">
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="emailAddress">Email address</label>
                                        <input  class="form-control" id="emailAddress" type="email" placeholder="Find By Email Address" value={email}
                onChange={(e) => setEmail(e.target.value.toLowerCase())} />
                                    </div>

                                    <div class="col-md-6">
                                    <button class="m-3 btn btn-primary" type="submit">Find by Email</button>
                                    </div>
                                </div>
</form>
<form onSubmit={handleSubmitDept}>
                                <div class="row gx-3 mb-3">
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="dept">Department</label>
                                        {/* <input class="form-control" id="dept" type="text" placeholder="Find By Department" value={department} onChange={(e) => setDepartment(e.target.value)} required/> */}
                    <select class="form-control" id="dept" onChange={(e) => setDepartment(e.target.value)}>
      <option value={"Sales"}>Sales</option>
      <option value={"Operations"}>Operations</option>
      <option value={"HR"}>HR</option>
      <option value={"Marketing"}>Marketing</option>
      <option value={"Accounts"}>Accounts</option>
      <option value={"Finance"}>Finance</option>
      
    </select>

                                    </div>
                                    <div class="col-md-6">
                                    <button class="m-3 btn btn-warning" type="submit">Find All By Department</button>
                                    </div>
                                </div>
                                
                            </form>
            </Container>
            </Col>
        </Row>        
    </>
  )
}

export default Salary