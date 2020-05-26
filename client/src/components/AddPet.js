import React, {useState} from 'react'
import axios from 'axios'
import {navigate} from '@reach/router'

const AddPet = () =>{

    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [skill, setSkill] = useState("")
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState({
        name:"",
        type:"",
        description:"",

    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const newPet = {name, type, skill, description}
        axios.post("http://localhost:8000/api/pets", newPet)
        .then(res => {
            console.log(res)
            if(res.data.errors){
                console.log(res.data.errors)
                setErrors(res.data.errors)
            }
            else{
                navigate("/")
            }
        })
        .catch(err => console.log(err))
    }

    return(
        <div>
            <p>{errors.name ? errors.name.properties.message:""}</p>
            <p>{errors.type ? errors.type.properties.message:""}</p>
            <p>{errors.description ? errors.description.properties.message:""}</p>

            <h3>Pet Shelter</h3> 
            <h6>Know a pet needing a home?</h6>      
            <div className="d-flex justify-content-center">            
                <form onSubmit = {handleSubmit}>
                    
                    <label htmlFor="name">Name</label>
                    <input 
                    className = "m-2 form-control" 
                    type= "text" 
                    onChange = {e => setName (e.target.value)}/><br/>

                    {errors.type ? <p style = {{color:"red"}}>{errors.type.message}</p> : ""}
                    <label htmlFor="type">Type</label>
                    <input 
                    className = "m-2 form-control"
                    type= "text" 
                    onChange = {e => setType (e.target.value)}/><br/>

                    {errors.skill ? <p style = {{color:"red"}}>{errors.skill.message}</p> : ""}
                    <label htmlFor="skill">Skill(optional)</label>
                    <input 
                    className = "m-2 form-control"
                    type= "text" 
                    onChange = {e => setSkill (e.target.value)}/><br/>

                    {errors.skill ? <p style = {{color:"red"}}>{errors.skill.message}</p> : ""}
                    <label htmlFor="skill">Skill(optional)</label>
                    <input 
                    className = "m-2 form-control"
                    type= "text" 
                    onChange = {e => setSkill (e.target.value)}/><br/>

                    {errors.skill ? <p style = {{color:"red"}}>{errors.skill.message}</p> : ""}
                    <label htmlFor="skill">Skill(optional)</label>
                    <input 
                    className = "m-2 form-control"
                    type= "text" 
                    onChange = {e => setSkill (e.target.value)}/><br/>

                    {errors.description ? <p style = {{color:"red"}}>{errors.description.message}</p> : ""}
                    <label htmlFor="description">Description</label>
                    <input 
                    className = "form-control"
                    type= "textarea" 
                    rows = "6" cols = "50" 
                    onChange = {e => setDescription (e.target.value)}/>
                    <input 
                    className = "m-2 btn btn-outline-dark"
                    type = "submit" 
                    value = "create"/>        
                </form>
            </div>
        </div>
    )

}

export default AddPet