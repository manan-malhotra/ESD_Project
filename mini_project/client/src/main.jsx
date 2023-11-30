import React from 'react'
import ReactDOM from 'react-dom/client'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Layout from './Layout.jsx';
import Login from './components/Login/Login.jsx';
import { UserProvider } from './components/Context/UserContext.jsx';
import Salary from './components/Salary/Salary.jsx';
import Details from './components/Details/Details.jsx';
import Department from './components/Department/Department.jsx';

const router = createBrowserRouter(
createRoutesFromElements(

<Route path='/' element={<Layout/>}>
<Route path='/' element={<Login/>}/>
  {/* <Route path='' element={<App/>}/> */}
  <Route path='home' element={<App/>}/>  
<Route path='salary/' element={<Salary/>}/>
<Route path='salary/dept/:deptName' element={<Department/>}/>
<Route path='salary/employee/:empName' element={<Details />}/>
</Route>
)  
)

ReactDOM.createRoot(document.getElementById('root')).render(
<UserProvider>
  <RouterProvider router={router}/>
</UserProvider>
)
