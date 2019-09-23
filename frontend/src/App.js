import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Heading from "./Components/Heading";
import RecipeList from "./Components/RecipeList";
import AddRecipe from "./Components/AddRecipe";
import EditRecipe from "./Components/EditRecipe";


function App() {
  return (
    <Router>
      <Heading/>
      <br/>
      <br/>
      <Route path = "/" exact component = {RecipeList} />
      <Route path = "/add" component = {AddRecipe} />
      <Route path = "/edit" component = {EditRecipe} />
    </Router>
  );
}

export default App;
