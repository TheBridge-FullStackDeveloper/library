const { Genre } = require("../models/index.js");

const GenreController ={
    async create(req,res){
        try {
            const genre = await Genre.create({name:req.body.name})
            res.status(201).send({msg:"Genre created successfully",genre})
        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
    }
}

module.exports = GenreController;
