//Write the ActionCreator functions here
import {GET_RECIPE_DATA_REQUEST, LOADING_REQUEST} from './actionType'


export const appAction = (data, dispatch)=>{
   

     dispatch( {
        type: GET_RECIPE_DATA_REQUEST,
        payload: data
     })




}


export const isloadingaction = (data, dispatch)=>{
   

   dispatch( {
      type: LOADING_REQUEST,
      payload: data
   })

   




}

export const addrecipeaction = (data, dispatch)=>{
   

   dispatch( {
      type: "ADD_RECIPE",
      payload: data
   })

   




}