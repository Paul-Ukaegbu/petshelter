import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from '@reach/router'
import AllPets from './AllPets'

const Display = (props) =>{
    const [pet, setPet] = useState({})
    
    useEffect(() =>{
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
        .then(res => {setPet({...res.data})})
    },[])

    return(
        <div>
            <h1>{pet.name}</h1>
            <p>{pet.type}</p>                      
            <p>{pet.description}</p>
            <p>{pet.skill}</p>
            <Link to = {`/pets/${pet._id}/edit`}>Edit Pet</Link>
        </div>
    )

}

export default Display