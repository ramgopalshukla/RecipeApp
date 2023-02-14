import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { appAction } from "../Redux/AppReducer/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [data, setdata] = useState([]);
  const dispatch = useDispatch();

  const mydata = useSelector((storedata) => {
    return storedata.Appreducer.Recipes;
  });

  console.log(mydata);

  useEffect(() => {
    if (mydata.length <= 0) {
      axios.get("http://localhost:8080/recipes").then((res) => {
        console.log(res.data.data);
        setdata(res.data.data);
        appAction(res.data.data, dispatch);
      });
    }
  }, []);

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
                <Link style={{ color: "blue" }} to={`/RecipeDetails/${res._id}`}>
                <td>
                  <img src={res.image} width="100px" alt="" />
                
                </td>
                </Link>
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
      </Table>
    </>
  );
}
