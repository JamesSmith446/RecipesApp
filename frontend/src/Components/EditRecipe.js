import React from 'react'
import Axios from 'axios'

class EditRecipe extends React.Component {
    constructor(){
        super()
        this.state = {
            newName: "",
            description: "",
            recipe: "",
            recipes: []
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
        Axios.get('http://localhost:5000/recipes/')
            .then(res =>{
                if(res.data.length > 0){
                    this.setState({
                        recipes: res.data.map(recipe => recipe.recipeName),
                        recipe: res.data[0].recipeName
                    })
                }
            })
    }

    onChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit(){
        Axios.put(`http://localhost:5000/recipes/${this.state.recipe}`)
            .then(res => console.log(res.data))
            .catch(err => console.log(`Error: ${err}`))
    }

    render(){
        return (
            <div className = "editrecipe">
            <h1>Edit a Recipe</h1>
            <div className = "editdelete">
            <form>
                <div className = "box1">
                <label>Recipe:</label>
                <br/>
                <select 
                    ref = "input"
                    name = "recipe"
                    value = {this.state.recipe}
                    onChange = {this.onChange}>
                    {
                        this.state.recipes.map((recipe) => {
                            return (
                                <option
                                    key = {recipe}
                                    value = {recipe}>
                                {recipe}
                                </option>
                            )
                        })
                    }
                </select>
                </div>
                <br/>
                <div className = "box1">
                <label>New Name:</label>
                <br/>
                <input 
                    type = "text"
                    name = "newName" 
                    placeholder = "Not needed if deleting"
                    value = {this.state.newName} 
                    onChange = {this.onChange}/>
                </div>
                <br/>
                <div className = "box1">
                <label>New Description:</label>
                <br/>
                <textarea 
                    value = {this.state.description} 
                    name = "description"
                    placeholder = "Not needed if deleting"
                    onChange = {this.onChange}/>
                </div>
                <br/>
                <button onClick = {this.onSubmit}>Edit Recipe</button>
            </form>
            </div>
            </div>
        )
    }
}


export default EditRecipe