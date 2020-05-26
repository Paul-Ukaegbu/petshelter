import React from 'react'
import axios from 'axios'
import {Link} from '@reach/router'

const AllPets = (props) => { 
    const{removeFromDom} = props //delete product from database 
    const deletePet = (id) =>{
        axios.delete(`http://localhost:8000/api/pets/${id}`)
        .then(res => {
            removeFromDom(id) //deletes from DOM
        })
    }

    return(
        <div>
            <h1>Pet Shelter</h1> 
            <h4>These pets are looking for a good home</h4>
            <ul>
                {props.pets.map((item, i) => {
                    return(
                        <div>
                            <li key= {i}><Link to = {`/api/pets/${item._id}`}>{item.name}</Link></li> 
                            <li>{item.type}</li>
                            <li>{item.description}</li>
                            <li>{item.skill}</li>
                            <li>{item.skill}</li>
                            <li>{item.skill}</li>
                            <button onClick = {(e) =>{deletePet(item._id)}}>Adobt Pet</button>
                        </div>
                    )
                })}
            </ul>
        </div>
    )

}

export default AllPets