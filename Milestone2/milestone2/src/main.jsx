import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Layout from './Layout.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Contact from './components/Contact/Contact';
import Profile from './components/Profile/Profile';
import Shop from './components/Shop/Shop';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Layout/>}>
            <Route path='' element={<App/>}/>
            <Route path='home' element={<App/>}/>
            <Route path='shop' element={<Shop/>}>
                {/* <Route path=':id' element={<h3>TEST</h3>}/> */}
            </Route>
            <Route path='contact' element={<Contact/>}/>
            <Route path='profile' element={<Profile/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='*' element={<h2>404</h2>}/>
        </Route>
	)
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
