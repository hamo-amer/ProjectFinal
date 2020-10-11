import {LOGIN_USER,LOGOUT,REGISTER_USER,GET_AUTH_USER,AUTH_ERROR, SET_LOADING} from '../const/actionType'
  

const initState={
    token:localStorage.getItem("token"),
    user:null,
    isAuth:false,
    isLoading:false,
    msg:null
}
export default function(state=initState,{type,payload}) {
    switch(type) {
        case SET_LOADING:
            return {...state,isLoading:true};
    case LOGOUT:
        localStorage.removeItem("token")
        return {...state,user:null,token:null,isAuth:false}
    case REGISTER_USER:
    case LOGIN_USER:
        localStorage.setItem("token",payload.token)
        return {...state,isLoading:false,isAuth:true,...payload} ;
    case GET_AUTH_USER:
        return {...state,isLoading:false,isAuth:true,...payload}
        default:
            return state
    }
}