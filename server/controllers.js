const Cake = require('./models');

module.exports = {

  getAllCakes: (req, res) => {    
    Cake.find()
      .then(data => console.log("bojour", data) || res.json(data))
      .catch(err => console.log(err) || res.json(err));
  },

  getOneCake: (req, res) => {
    const ID = req.params.id;
    Cake.findOne({_id:ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  createCake: (req, res) => {
    const DATA = req.body;
    console.log("hari", DATA);
    Cake.create(DATA)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  updateCake: (req, res) => {
    const ID = req.params.id;
    const DATA = req.body;
    console.log("data >>> ", DATA.content);
    // Cake.findOneAndUpdate({_id:ID}, DATA, {runValidators:true, new:true})
    //   .then(data => res.json(data))
    //   .catch(err => res.json(err));
    Cake.updateOne({_id: ID}, {$push: {comments: DATA}}, {runValidators:true})
    .then(data=> console.log(data))
    .catch(err => console.log("------ ", err))

  },

  addComments: (req, res) => {
    // Cake.findOneAndUpdate({_id:ID}, {$push: {comments: DATA}}, {runValidators:true, new:true})
  },

  deleteCake: (req, res) => {
    const ID = req.params.id;
    Cake.findOneAndDelete({_id:ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  }
}