import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Recipe = props => (
    <tr>
      <td>{props.recipe.recipeName}</td>
      <td>{props.recipe.description}</td>
      <td>
        <a href="#" onClick={() => { props.deleteRecipe(props.recipe._id) }}>delete</a>
      </td>
    </tr>
  )

class RecipeList extends React.Component {
    constructor(){
        super()
        this.state = {
            recipes: []
        }
        this.deleteRecipe = this.deleteRecipe.bind(this)
    }

    componentDidMount(){
        axios.get('http://localhost:5000/recipes')
            .then(res =>{
                this.setState(
                    {
                        recipes: res.data
                    }
                )
            })
            .catch(error => {
                console.log("Error: " + error)
            })
    }

    deleteRecipe(id) {
      axios.delete(`http://localhost:5000/recipes/${id}`)
          .then(res => console.log(res.data))
          .catch(err => console.log(`Error: ${err}`));

      this.setState({
          recipes: this.state.recipes.filter(el => el._id !== id)
      })
    }

    recipeList() {
        return this.state.recipes.map(current => {
            return <Recipe recipe = {current} deleteRecipe = {this.deleteRecipe} key = {current._id}/>
        })
    }

    render(){
        return (
        <div>
        <h3>Saved Recipes</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Recipe</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            { this.recipeList() }
          </tbody>
        </table>
      </div>
        )
    }
}

export default RecipeList