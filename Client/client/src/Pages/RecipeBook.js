import React from 'react'
import { useSelector } from 'react-redux';
import Table from "react-bootstrap/Table";
import {Link} from 'react-router-dom'
export default function RecipeBook() {

    const mydata = useSelector((storedata) => {
        return storedata.Appreducer.RecipeBook;
      });

      console.log(mydata)

  return (
    <>
    <Table striped bordered hover>
        <thead>
          <tr>
            <th>Your Recipes</th>
            <th>recipe</th>
            <th>name</th>
            <th>ingrediants</th>
          </tr>
        </thead>
        <tbody>
          {mydata.map((res, index) => {
            return (
              
                 <tr>
                <td>{index + 1}</td>
                
                <td>
                  <img src={res.image} width="100px" alt="" />
                
                </td>
               
                <td>{res.name}</td>
                <td>
                  {res.ingredients.map((item) => {
                    return item + "," + " ";
                  })}
                </td>
              </tr>
            
            
            );
          })}
        </tbody>
      </Table></>
  )
}

