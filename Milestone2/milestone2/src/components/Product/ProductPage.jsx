import React from 'react'

import Display from './Display';
import Rating from './Rating'
import WhyChooseUs from './../WhyChooseUs/WhyChooseUs'
    function changeText(n) {
        for (var i = 0; i < n; i++) {
            document.getElementsByClassName('test')[i].name = 'star';
        }
        for (var i = n; i < 5; i++) {
            document.getElementsByClassName('test')[i].name = 'star-outline';
        }
    }
function ProductPage() {
   
    return (
        <>
            <Display/>  
             <Rating/>
        <WhyChooseUs />
        </>
    )
}

export default ProductPage