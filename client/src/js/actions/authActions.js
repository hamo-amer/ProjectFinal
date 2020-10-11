import React  from 'react';
import axios from 'axios';
import {Alert} from 'reactstrap'
import {LOGIN_USER,
    LOGOUT,REGISTER_USER,
    GET_AUTH_USER,AUTH_ERROR,
     SET_LOADING} 
    from '../const/actionType'
    // Register auth
     export const register=(formData)=>async (dispatch)=>{
         dispatch(setLoading())
         try {
            const res=await axios.post('/api/users/register',formData);

            dispatch({
                type:REGISTER_USER,
                payload:res.data // {msg:"Login success",user,token}
            })
         } catch (error) {
            console.dir(error)
            const {errors,msg}=error.response.data
            if(Array.isArray(errors)) {
                errors.forEach(err=>(alert(err.msg)));
            }
            if(msg) {
               alert(msg)
            }
            dispatch({
                type:AUTH_ERROR
            })
         } 
     }
     // Login auth
     export const login=(formData)=>async (dispatch)=>{
        dispatch(setLoading())
        try {
           const res=await axios.post('/api/users/login',formData);

           dispatch({
               type:LOGIN_USER,
               payload:res.data // {msg:"Login success",user,token}
           })
        } catch (error) {
            console.dir(error)
            const {errors,msg}=error.response.data
            if(Array.isArray(errors)) {
                errors.forEach(err=>(  alert(err.msg)))
            }
            if(msg) {
               alert(msg)
            }
            dispatch({
                type:AUTH_ERROR
            })
        } 
    }
    // get auth user
    export const getAuthUser=()=>async (dispatch)=>{
        dispatch(setLoading())
     try {
         const options={
             headers:{authorization:localStorage.getItem("token")}
         }
         const res=await axios.get('/api/users/me',options)

         dispatch({
             type:GET_AUTH_USER,
             payload:res.data
         })

     } catch (error) {
         console.dir(error)
         dispatch({
            type:AUTH_ERROR
        })
     }
    }
    const setLoading=()=> dispatch=>{
        dispatch({
            type:SET_LOADING
        })
    }
    export const logout=()=>(dispatch)=>{
        dispatch({
            type:LOGOUT
        })
    }