const {Pet} = require("../models/models.pet")

module.exports.createPet = (req,res) => {
    const{name, type, description, skill} = req.body
    Pet.create({
        name,
        type,
        description,
        skill
    })
    .then(pet => res.json(pet))
    .catch(err => res.json(err)) 
}


module.exports.displayPets =(req,res) => {
    Pet.find({})
    .then(pets => res.json(pets))
    .catch(err => res.json(err))     
}

module.exports.getOnePet = (req, res) => {
    Pet.findById({_id:req.params.id})
    .then(onePet => res.json(onePet))
    .catch(err => res.json(err))
}

module.exports.updatePet = (req, res) => {
    Pet.findByIdAndUpdate({_id:req.params.id}, req.body,{new:true, runValidators:true})
    .then(updatePet => res.json(updatePet))
    .catch(err => res.json(err))    
}

module.exports.deletePet = (req, res) => {
    Pet.findByIdAndDelete({_id:req.params.id})
    .then(deletePet => res.json(deletePet))
    .catch(err => res.json(err)) 
}