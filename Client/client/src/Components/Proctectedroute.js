import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function Proctectedroute({children}) {


    const isAuth= useSelector((storedata)=>{
         return storedata.Authreducer.isAuth
    })
if(isAuth){
    return children
}else{
    return <Navigate to="/login"/>
}
}

