import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import {addrecipeaction} from '../Redux/AppReducer/action'
import { useDispatch } from "react-redux";
function Recipedetails(props) {
  const [state, setState] = useState([]);
  const { id } = useParams();
  let Recipe = useSelector(
    (storeData) => storeData.Appreducer.Recipes
  );

  const mydata = useSelector((storedata) => {
    return storedata.Appreducer.RecipeBook;
  });

  console.log(mydata)
  const dispatch= useDispatch();
  useEffect(() => {
    setState(
      Recipe.filter((ele) => {
        console.log(ele.id, id);
        return ele.id == id;
      })
    );
  }, []);

  const addtobook= (data)=>{
   addrecipeaction(data, dispatch)
   alert("recipe added to your recipee book")
  }

  return (
    <div>
      <h2 style={{ color: "green" }}>Recipe Details</h2>
      {state.length > 0 ? (
        <div>
          {console.log(state)}
          <img src={state[0].image} width="300" height="300" />
          <p>{state[0].name}</p>
          <p>{state[0].ingredients}</p>
          <p>{state[0].instructions}</p>
          <button onClick={()=>{addtobook(state[0].image)}}>Add Recipe on Book</button>
        </div>
      ) : (
        <div> Data is not Available</div>
      )}
    </div>
  );
}

export default Recipedetails;
