const Pet = require('./models');

module.exports = {

  getAllPets: (req, res) => {    
    Pet.find()
      .then(data => console.log("all pets got", data) || res.json(data))
      .catch(err => console.log(err) || res.json(err));
  },

  getOnePet: (req, res) => {
    const ID = req.params.id;
    Pet.findOne({_id:ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  createPet: (req, res) => {
    const DATA = req.body;
    console.log("pet creatin", DATA);
    Pet.create(DATA)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  updatePet: (req, res) => {
    const ID = req.params.id;
    const DATA = req.body;
    console.log("data update>>> ", DATA.content);
    Pet.findOneAndUpdate({_id:ID}, DATA, {runValidators:true, new:true})
      .then(data => res.json(data))
      .catch(err => res.json(err));
    // Pet.updateOne({_id: ID}, {$push: {comments: DATA}}, {runValidators:true})
    // .then(data=> console.log(data))
    // .catch(err => console.log("------ ", err))

  },

  deletePet: (req, res) => {
    const ID = req.params.id;
    console.log("deletein pet ")
    Pet.findOneAndDelete({_id:ID})
      .then(data => res.json(data))
      .catch(err => res.json(err))
      console.log("deleted pet")
  }
}