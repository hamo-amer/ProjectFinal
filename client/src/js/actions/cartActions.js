import {GET_PRODUCTS_CART} from '../const/actionType'


// GET PRODUCTS TO CART
export const getCart=(products)=>(dispatch)=>{

    dispatch({type:GET_PRODUCTS_CART,payload:products})
 
}
