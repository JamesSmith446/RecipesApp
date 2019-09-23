import React from 'react'
import axios from 'axios'

class AddRecipe extends React.Component {
    constructor(){
        super()
        this.state = {
            recipeName: '',
            description: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(event){
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    onSubmit(event){
        event.preventDefault();
        const recipe = {
            recipeName: this.state.recipeName,
            description: this.state.description
        }
        axios.post('http://localhost:5000/recipes/add', recipe)
            .then(res => console.log(res.data));

        this.setState({
            recipeName: '',
            description: ''
        })
    }


    render(){
        return (
            <div>
                <form onSubmit = {this.onSubmit}>
                    <div className = "box">
                        <label>Recipe Name</label>
                        <br/>
                        <input 
                            type = "text" 
                            name = "recipeName" 
                            value = {this.state.recipeName}
                            onChange = {this.onChange}/>
                    </div>
                    <div className = "box">
                        <label>Description</label>
                        <br/>
                        <textarea 
                            name = "description" 
                            value = {this.state.description}
                            onChange = {this.onChange}/>
                    </div>
                    <br/>
                    <br/>
                    <div className = "buttondiv"><button>Make Recipe!</button></div>
                </form>
            </div>
        )
    }
}

export default AddRecipe