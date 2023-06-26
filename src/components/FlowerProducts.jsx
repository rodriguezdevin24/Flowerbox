import React from 'react'
import { data } from '../data/flowerData.js'
import Tags from './Tags.jsx'

console.log(data)

export default function FlowerProducts() {
  const products = data.map((product, index) => {
    return <div key={index} className={`product product-${index}`}>
        <img src={product.image}/>
        <div className="product-info">
            <p className="name">{product.name}</p>
            <p className="price">{'$'+product.price}</p>
            <Tags tags={product.tags}/>
        </div>
    </div>
  })
    return (
    <div className="products">
        {products}
    </div>
  )
}

