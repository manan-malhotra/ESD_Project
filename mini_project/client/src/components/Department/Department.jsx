import React, { useEffect, useState } from 'react'
import { useUser } from '../Context/UserContext';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Row } from 'react-bootstrap';

function Department() {
const { user } = useUser();
const { setUserContext } = useUser();
const navigate = useNavigate();
const {deptName} = useParams();
const [userData, setUserData] = useState([]);
const [salary, setSalary] = useState('');
const [description, setDescription] = useState('');
const [updater, setUpdater] = useState('');
const disburse =  (e) => {
    e.preventDefault();
    console.log(userData);
    console.log(description);
    console.log(salary);
    let myArr = []
    for(let i=0;i<userData.length;i++){
        if(userData[i].email!=user.email){
        myArr.push({
        amount:salary,
        description:description,
        employeeId: userData[i].employeeId
    })
}else{
    toast.error('You cannot disburse your own salary! Other Salary will be disbursed automatically.');
    }
    }
console.log(myArr);
axios.post('http://localhost:8080/aux/add/allSalary',myArr).then((response)=>{
    console.log(response.status);
    if(response.status==200){
    toast.success('Salary disbursed!');
    setDescription('');
    setSalary('');
    setUpdater(Math.random());
    }
}).catch((error)=>{
    console.log(error);
    toast.error('An unexpected error occurred. Please try again later.');
})
    
}
useEffect(() => {
    if (user && user.email != null) {
    }else{
        navigate('/');
    }
},[user]);
useEffect(() => {
    
    
    const url = 'http://localhost:8080/aux/deptAll/'+deptName;
    console.log(url);
    axios.get(url)
    .then((response) => {
    console.log(response.data);
  
    setUserData(response.data);

    })
    .catch((error) => {
        if(error.response){
            console.log(error.response.status);
            toast.error('Incorrect Department. Please try again.');
        }else{
            console.log("Band hai");
            console.error(error);
        }
    })
    }, [updater])
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
<h2 className='mt-5'>Details for {deptName} Department</h2>
{
userData.length == 0 ?(<h2 className='pt-5'></h2>):(
    <>
<form onSubmit={disburse}>
<div class="row gx-3 mb-3">
                                    <div class="col-md-4">
                                        <label class="small mb-1" for="description">Description</label>
                                        <input  class="form-control" id="description" type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                                    </div>
    <div class="col-md-4">
                                        <label class="small mb-1" for="amount">Enter Amount</label>
                                        <input  class="form-control" id="amount" type="number" placeholder="Amount" value={salary} onChange={(e) => setSalary(e.target.value)} required/>
                                    </div>
                                    <div class="col-md-4">
    <button type='submit' className='btn btn-danger mt-3 mb-3'>Disburse for all</button>
                                    </div>
                                </div>
</form>
</>
)
}

{
userData.length == 0 ?(<h2 className='pt-5'>No Data Available</h2>):(
 
                    userData.map((data) => {
                        return (<>
<Row className='mt-2'> 
    <div className="card">
        <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
                <p>{data["firstName"]} {data["lastName"]}</p>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <p>Rs. {data["amount"]}</p>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <p>{data["email"]}</p>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <button onClick={() => navigate('/salary/employee/'+data["email"].split('@')[0])} className='btn btn-primary'>View Details</button>
            </div>
        </div>

    </div>
                            
</Row>

</>
                        );
                    }
))
}
    </>
  )
}

export default Department