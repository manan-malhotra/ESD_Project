import { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
import './App.css'
import { useUser } from './components/Context/UserContext';
import { Col, Row, Container } from 'react-bootstrap';
import axios from 'axios';
function App() {
  const { user } = useUser();
  const { setUserContext } = useUser();
  const navigate = useNavigate();
  const [userData, setUserData] = useState('');
  const [department, setDepartment] = useState('');

  useEffect(() => {
  
    if (user && user.email != null) {
        console.log("test");
        const url = 'http://localhost:8080/aux/employee/'+user.email;
        axios.get(url)
        .then(response =>{
          console.log(response.data);
          console.log(response.data.department.deptName);
          setUserData(response.data);
          console.log(response.data.firstName);
          setDepartment(response.data.department);
          
        })
        .catch(error =>{
          if(error.response){
            console.log(error.response.status);
          }else{
            console.log("Band hai2");
            console.error(error);
          }
        })
    }else{
        // console.log("test2");
      navigate('/');
    }
  }, [user]);
  return (
    <>
      {user && user.email != null ? (
<>
<main >
        <div className="container containerb">
            <h1 className="pt-5">Welcome {userData.title} {userData.firstName} {userData.lastName}</h1>
        </div>
</main>
<section className='pt-5 myProfile'>
  <Row>
  <Col>
  <Container>
    <Row><div class="col-xl-8">
                    <div class="card mb-4">
                        <div class="card-header">Account Details</div>
                        <div class="card-body">
                            <form >
                                <div class="row gx-3 mb-3">
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputFirstName">First name</label>
                                        <input readonly class="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" value={userData.firstName} />
                                    </div>
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputLastName">Last name</label>
                                        <input class="form-control" id="inputLastName" type="text" placeholder="Enter your last name" value={userData.lastName} />
                                    </div>
                                </div>
                                <div class="row gx-3 mb-3">
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputFirstName">Department</label>
                                        <input readonly class="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" value={department.deptName} />
                                    </div>
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputEmailAddress">Email address</label>
                                    <input  class="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value={userData.email} />
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 ">
                    <div class="card mb-4 mb-xl-0">
                        <div class="card-header">Profile Picture</div>
                        <div class="card-body text-center">
                            <img class="img-account-profile rounded-circle mb-2 w-50" src={'./src/assets/'+userData.photographPath+'.JPEG'} alt="Img Not available" />
                        </div>
                    </div>
                </div>

    </Row>
</Container>
  </Col>

  </Row>
</section>  
</>
):(
<>
<Row className='pt-5'>

<Col>Please login to view this page</Col>
</Row>
</>
)}
    </>
  )
}

export default App
