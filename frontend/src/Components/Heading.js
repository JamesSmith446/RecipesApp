import React from 'react'
import { Link } from 'react-router-dom'

class Heading extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render(){
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Recipes</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/add" className="nav-link">Add a Recipe!</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/edit" className="nav-link">Edit a Recipe!</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }

    
}

export default Heading