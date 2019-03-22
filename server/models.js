const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pets', {useNewUrlParser:true})
  .catch(err => console.log(err));

const PetSchema = new mongoose.Schema({
  name: {
    type: String, 
    default: "",
    required:[true,"Pet Name is required"],
    minlength:[3,'must be more than 3 characters']
  },
  type: {
    type: String, 
    default: "",
    required:[true,"type is required"],
    minlength:[3,'must be more than 3 characters']
  },
  description: {
    type: String, 
    default: "",
    required:[true,"description is required"],
    minlength:[5,'must be more than 5 characters']
  },
  skills:{
    skill1: {type: String},
    skill2: {type: String},
    skill3:{type: String}
  }
  
}, {timestamps:true});

module.exports = mongoose.model('Pet', PetSchema); 
