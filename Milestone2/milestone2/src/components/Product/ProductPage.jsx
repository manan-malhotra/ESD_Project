import React from 'react'
import { useParams } from 'react-router-dom'
import Main from '../Main/Main';
function ProductPage() {
    const { id , name} = useParams();
    return (
        <>
            <Main name={name}/>
            <h1>
            {id}
            </h1>
        </>
    )
}

export default ProductPage