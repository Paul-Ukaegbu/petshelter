import React, {useState, useEffect} from 'react'
import axios from 'axios'
import AllPets from './AllPets'

const Main = () => {

    const[pets, setPets] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
        .then(res => setPets(res.data))
    },[])

    const removeFromDom = id =>{ //remove from DOM
        setPets(pets.filter(pet => pet._id !== id))
    }

    return(
        <div>
            <AllPets pets = {pets} removeFromDom = {removeFromDom}/>
        </div>
    )
}



export default Main