import React from 'react'
import CardProduct from './CardProduct';

function ListProducts({products}) {
 
    return (
        <div className="listProducts">
            
           {products.map(product=> <CardProduct product={product}  key={product._id}/>)}
             
        </div>
    )
}

export default ListProducts;
