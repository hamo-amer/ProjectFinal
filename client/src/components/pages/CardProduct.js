import React from 'react';
import { 
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'


const CardProduct = ({product}) => {
  const isAuth = useSelector(state => state.authReducer.isAuth)
  const cart=useSelector(state=>state.cartReducer.cart)
  
  // ADD PRODUCT TO CART
  const addToCart=(product)=>{
    cart.push(product);
  };
  
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>{product.name}</CardTitle>
          <CardSubtitle>Price:{product.price} DT</CardSubtitle>
          <CardText>{product.description}.</CardText>
          {isAuth ? (
          <Link to='/goToCart'> <Button onClick={()=>addToCart(product)}>Add to cart</Button></Link>    
          ) : (
            <Button onClick={()=>(alert("Must Login or Register"))}>Add to cart</Button>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default CardProduct;
