//Write the ActionCreator functions here
 import {LOGIN_REQUEST} from './actionTypes'

export const isAuthaction= (data, dispatch)=>{
       dispatch({
          type: LOGIN_REQUEST,
          payload: data

       })

}