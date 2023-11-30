import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useUser } from '../Context/UserContext';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Container, Row } from 'react-bootstrap';
function Details() {
const { user } = useUser();
const { setUserContext } = useUser();
const navigate = useNavigate();
const {empName} = useParams();
const [userData, setUserData] = useState('');
const [salary, setSalary] = useState('');
const [updater, setUpdater] = useState('');
const [description, setDescription] = useState('');
const handleSubmit =  (e) => {
    e.preventDefault();
    console.log(salary);
    console.log(description);
    const data = {
    amount:salary,
    description:description,
    employeeId: userData.employeeId
    }
    if(user.email==empName+"@email.com"){
        toast.error('You cannot disburse your own salary!');
    }else{
    const url = "http://localhost:8080/aux/add/employee-salary"
    axios.post(url,data).then((response)=>{
        if(response.status==200){
        toast.success('Salary disbursed!');
        setDescription('');
        setSalary('');
        setUpdater(Math.random());
        }
    }).catch((error)=>{
        toast.error('An unexpected error occurred. Please try again later.');
    })
}
}
useEffect(() => {
    if (user && user.email != null) {
    }else{
        navigate('/');
    }
},[user]);
useEffect(() => {
    const email = empName+"@email.com";
    console.log(email);
    const url = 'http://localhost:8080/aux/details/'+email;
    console.log(url);
    axios.get(url)
    .then((response) => {
    console.log(response.data);
    toast.success('Data Fetched!');
  
    setUserData(response.data);

    })
    .catch((error) => {
        if(error.response){
            console.log(error.response.status);
            toast.error('Incorrect roll number or password. Please try again.');
        }else{
            console.log("Band hai");
            console.error(error);
        }
    })
    }, [updater])
  return (<>
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
    <h3 className='mt-5'>Details for {userData.firstName} {userData.lastName}</h3>
    <Container>
    <Row>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{userData.firstName} {userData.lastName}</h5>
                <p className="card-text">Email: {userData.email}</p>
                <p className="card-text">Last Salary: Rs. {userData.amount}</p>
                <p className="card-text">Department: {userData.deptName}</p>
            </div>
        </div>
    </Row>
<Row className='mt-5'>
<form onSubmit={handleSubmit} >
            <div class="row gx-3 mb-3">
                                    <div class="col-md-4">
                                        <label class="small mb-1" for="description">Description</label>
                                        <input  class="form-control" id="description" type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                                    </div>
    <div class="col-md-4">
                                        <label class="small mb-1" for="amount">Enter Amount</label>
                                        <input  class="form-control" id="amount" type="number" placeholder="Amount" value={salary} onChange={(e) => setSalary(e.target.value)} />
                                    </div>
                                    <div class="col-md-4">
                                    <button class="m-3 btn btn-primary" type="submit">Disburse Salary</button>
                                    </div>
                                </div>
        </form>
</Row>
    </Container>
</>
  )
}

export default Details