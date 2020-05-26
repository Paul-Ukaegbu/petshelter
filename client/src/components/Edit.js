import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {navigate} from '@reach/router'

const Edit = (props) =>{
    const{id} = props
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [skill, setSkill] = useState("")
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then (res => {
            setName(res.data.name)
            setType(res.data.type)
            setSkill(res.data.skill)
            setDescription(res.data.description)
        })
    },[])//prevents useEffect from reloading (triggers once)


    const handleUpdate = e => {
        e.preventDefault() //prevents page from reloading when form is submitted
        axios.put(`http://localhost:8000/api/pets/${id}`,{
            name,
            type, 
            skill,
            description
        })
        .then(res => {
            console.log(res)
            if(res.data.errors){
                setErrors(res.data.errors)
            }
            else{
                navigate("/")//for future use decide where you want to navigate to when edited
            }
        })
        .catch(err => console.log(err))
    }

    return(
        <div>
            <form onSubmit = {handleUpdate}>
            {errors.name ? <p style = {{color:"red"}}>{errors.name.message}</p> : ""}
            <input type= "text" value = {name} onChange = {e => setName (e.target.value)}/>

            {errors.type ? <p style = {{color:"red"}}>{errors.type.message}</p> : ""}
            <input type= "text" value = {type} onChange = {e => setType (e.target.value)}/>

            {errors.description ? <p style = {{color:"red"}}>{errors.description.message}</p> : ""}
            <input type= "textarea"  value = {description}rows = "4" cols = "20" onChange = {e => setDescription (e.target.value)}/>

            <input type = "submit" value = "create"/>        
            </form>

        </div>
    )

}

export default Edit