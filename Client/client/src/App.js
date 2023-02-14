import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";

import Login from "./Pages/Login";
import Register from "./Pages/Register";

import { useSelector } from "react-redux";
import Spinner from "./Components/Spinner";
import Navbar from "./Pages/Navbar";
import Proctectedroute from "./Components/Proctectedroute";
import Publicrouter from "./Components/Publicrouter";
import Recipedetails from './Pages/Recipedetails'
import RecipeBook from './Pages/RecipeBook'
function App() {

  const loading= useSelector((storedata)=>{
    return storedata.Appreducer.loading
})

  return (
    <>
      <Navbar />
      <BrowserRouter>
        {loading ? (
          <Spinner />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <Proctectedroute>
                  <HomePage />
                </Proctectedroute>
              }
            ></Route>
                <Route
              path="/RecipeDetails/:_id"
              element={
                <Proctectedroute>
                  <Recipedetails/> 
                </Proctectedroute>
              }
            ></Route>
               <Route
              path="/recipebook"
              element={
                <Proctectedroute>
                  <RecipeBook/> 
                </Proctectedroute>
              }
            ></Route>
            <Route
              path="/login"
              element={
                <Publicrouter>
                  <Login />
                </Publicrouter>
              }
            ></Route>
         
            <Route
              path="/register"
              element={
                <Publicrouter>
                  <Register />
                </Publicrouter>
              }
            ></Route>
            <Route></Route>
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
