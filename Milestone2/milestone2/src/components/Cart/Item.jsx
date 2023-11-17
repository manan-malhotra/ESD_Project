import React from 'react'
import { useEffect } from 'react';
import cart from '../../services/cart';

function Item({id}) {
const [data, setData] = React.useState('')
const [quantity, setQuantity] = React.useState('')
    const fetchData = () => {
        window.scrollTo(0,0);
        cart.getData()
        .then((response)=>{
            console.log(response.data[id].name)
            setData(response.data[id])
            setQuantity(response.data[id].quantity)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    useEffect(() => {
      fetchData();
   }, []);

  return (
    <tr style={{display:data.display}}>
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
            <button onClick={() => setQuantity(Number(quantity) - 1)} className="btn btn-outline-black decrease" type="button">−</button>
            </div>
            <input type="text" className="form-control text-center quantity-amount" value={quantity} placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" min="1"/>
            <div className="input-group-append">
            <button onClick={() => setQuantity(Number(quantity) + 1)} className="btn btn-outline-black increase" type="button">+</button>
            </div>
        </div>

        </td>
        <td>₹{data.price * quantity}</td>
        <td><a href="#" className="btn btn-black btn-sm">X</a></td>
    </tr>
  )
}

export default Item