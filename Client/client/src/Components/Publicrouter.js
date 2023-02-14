import React, { Children } from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Publicrouter({children}) {

  const isAuth= useSelector((storedata)=>{
    return storedata.Authreducer.isAuth
})

console.log(isAuth)
 if(isAuth){
    return <Navigate to="/"/>
 }else{
   return  (children)
 }
}
