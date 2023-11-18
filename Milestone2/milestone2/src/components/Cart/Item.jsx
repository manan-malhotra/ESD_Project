import React from 'react'
import { useEffect } from 'react';
import cart from '../../services/cart';
import addCart from '../../services/addCart';

function Item({id,subTotal,addTotal}) {
const [data, setData] = React.useState('')
const [quantity, setQuantity] = React.useState('')
const [display, setDisplay] = React.useState('none')
    const fetchData = () => {
        window.scrollTo(0,0);
        cart.getData()
        .then((response)=>{
            console.log(response.data)
            setData(response.data[id])
            setQuantity(response.data[id].quantity)
            setDisplay(response.data[id].display)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    useEffect(() => {
      fetchData();
   }, []);
    function decreaseQuantity(){
    setQuantity(Number(quantity) - 1)
    subTotal(data.price)
    console.log(quantity)
    if(quantity==1) {
        removeCart();    
    }
    addCart.postData(id,-1);
    }
    function increaseQuantity(){
        setQuantity(Number(quantity) + 1)
        addTotal(data.price)
        addCart.postData(id,1);
    }
    function removeCart(){
        setQuantity(0);
        subTotal(data.price*quantity)
        setDisplay('none')
        addCart.postData(id,-quantity);
    }
  return (
    <tr style={{display:display}}>
        <td className="product-thumbnail">
        <img src={"../../public/"+id+".jpg"} alt="Image" className="img-fluid" />
        </td>
        <td className="product-name">
        <h2 className="h5 ">{data.name}</h2>
        </td>
        <td>₹{data.price}</td>
        <td>
        <div className="input-group mb-3 d-flex align-items-center quantity-container" style={{maxWidth: "120px"}}>
            <div className="input-group-prepend">
            <button onClick={decreaseQuantity} className="btn btn-outline-black decrease" type="button">−</button>
            </div>
            <input readOnly type="text" className="form-control text-center quantity-amount" value={quantity} placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" min="1"/>
            <div className="input-group-append">
            <button onClick={increaseQuantity} className="btn btn-outline-black increase" type="button">+</button>
            </div>
        </div>

        </td>
        <td>₹{(data.price * quantity).toFixed(2)}</td>
        <td><button type='button' onClick={removeCart} className="btn btn-black btn-sm">X</button></td>
    </tr>
  )
}

export default Item