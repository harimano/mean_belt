const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ratemycake2', {useNewUrlParser:true})
  .catch(err => console.log(err));

const cakeCommentsSchema= new mongoose.Schema({
  rating: {type: String},
  content: {type: String}
})
const CakeSchema = new mongoose.Schema({
    bakername: {
      type: String, 
      default: ""
    },
    imageurl: {
      type: String, 
      default: ""
    },
    comments:[{
      rating: {type: String},
      content: {type: String}
    }]
    
}, {timestamps:true});

module.exports = mongoose.model('Cake', CakeSchema); 
