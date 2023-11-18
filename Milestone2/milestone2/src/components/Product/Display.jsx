import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';
import Main from '../Main/Main';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import addCart from '../../services/addCart';
function Display() {
const navigate = useNavigate();
const { id} = useParams();
    const [data, setData] = React.useState('')
    const fetchData = () => {
        if(Number(id.substring(4))>8){
            navigate('/404',{replace: true});    
        }
        window.scrollTo(0,0);
        api.getData()
        .then((response)=>{
            console.log(response.data[id])
            setData(response.data[id])
        })
        .catch((error) => {
            console.log(error)
        })
    }
    useEffect(() => {
      fetchData();
   }, []);
    function addCart2(){
        console.log(id);
        addCart.postData(id,1);
        navigate('/cart',{replace: true});
    }
  return (<>
    <Main name={data.brand+" "+ data.name}/>
            <section className="product mb-5">
            <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-8 col-12 left-column">
                    <img className="current" src={"../../public/"+id+".jpg"} alt=""/>
                </div>
                <div className="pl-5 pt-5 pl-md-2 pt-md-2 col-lg-4 col-md-4">
                    <div className="product-description">
                        <span>{data.category}</span>
                        <h1>{data.brand}</h1>
                        <p>{data.description}</p>
                    </div>
                    <div className="product-configuration">
                        <div className="product-color">
                            <div className="row">

                                <div className="mt-3 product-price col-6">
                                    <span>₹{data.price}</span>
                                </div>
                                <div className="col-6 pt-3">
                                    <ion-icon class="gold" className="gold" name="star"></ion-icon>
                                    <ion-icon class="gold" className="gold" name="star"></ion-icon>
                                    <ion-icon class="gold" className="gold" name="star"></ion-icon>
                                    <ion-icon class="gold" className="gold" name="star-half"></ion-icon>
                                    <ion-icon class="gold" className="gold" name="star-outline"></ion-icon>
                                </div>
                            </div>
                            <div className="mt-3">
                                <button onClick={addCart2} className="btn btn-black btn-lg btn-warning">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="product-ratings">
                        <div className="row">

                            <div className="mt-3  col-6">
                                <a href="#">
                                    <span>REVIEWS({data.reviews})</span>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
  )
}

export default Display