import React from 'react'
import { products } from '../../data'
import Product from '../Product/Product'
import "./ProductList.css"
const ProductList = () => {
  return (
    <div className='pl'> 
        <div className="pl-texts">
            <h1 className="pl-title">Create & Inspire</h1>
            <p className="pl-desc">
                This is a creative portfolio that your work has been waiting.Beautiful homes,
                stunning portfolio styles & a whole lot more awaits inside.
            </p>
        </div>
        <div className="pl-list">
          {products.map((item)=>(
            <Product key={item.id} img={item.img} link={item.link}/>
          ))}
        </div>      
    </div>
  )
}

export default ProductList