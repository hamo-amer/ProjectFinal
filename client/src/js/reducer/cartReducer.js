import {GET_PRODUCTS_CART} from '../const/actionType'

const initState={
    cart:[]  
}
export default function(state=initState,{type,payload}) {
    switch(type) {
    case GET_PRODUCTS_CART:
        return {...state,cart:payload}
    default :
    return state;
    }
}