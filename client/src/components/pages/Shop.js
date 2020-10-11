import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Table ,Button} from 'reactstrap';
import { AiFillDelete } from "react-icons/ai"
import {useSelector,useDispatch} from 'react-redux'
import {getCart} from '../../js/actions/cartActions'

function Shop() {
    const cart = useSelector(state => state.cartReducer.cart);
    const user = useSelector(state =>state.authReducer.user)
    const dispatch = useDispatch();
    // function remove product from cart
    const removeFromCart=(idProduct)=>{
    const listCart= cart.filter(product=>product._id !==idProduct);
    dispatch(getCart(listCart))
    };
    // function total price
   const getTotalPrice=()=>{
     let sum=0;
     for(let i=0;i<cart.length;i++) {
       sum+=cart[i].price;
     }
     return sum;
   };
   // Confirm shopping
   const totalPrice=Number(getTotalPrice());
   const userName=user.name;
   const userPhone=user.phoneNumber;
   const products=[];
   for(let i=0;i<cart.length;i++) { 
     products.push(cart[i].name);
   }
  
   const handleConfirm=(cartData)=>{
    axios.post('/api/cart/add',cartData)
    .then(doc=>console.log({msg:"commande passé",doc}))
    .catch(error=>console.log(error))
   };
    return (
        <div className="listcart">
            <h1>Total:{getTotalPrice()} DT</h1>
            <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
       { cart.map(product=>( <tr key={product._id}>
          <th scope="row">1</th>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td onClick={()=>removeFromCart(product._id)}><AiFillDelete /></td>
        </tr>)
       )}
      </tbody>
    </Table>
    <Link to='/'><Button color="primary" onClick={()=>handleConfirm({userName,userPhone,products,totalPrice})}>Confirm</Button>{' '} </Link>
        </div>
    )
}

export default Shop
