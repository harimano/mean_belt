const controllers = require('./controllers.js');

module.exports = app => {

  app
    
    .get('/pets/:id', controllers.getOnePet)
    .get('/pets', controllers.getAllPets)
    .post('/pets/new', controllers.createPet)
    .put('/pets/:id/edit', controllers.updatePet)
    .delete('/pets/delete/:id', controllers.deletePet)
    .all("*", (req,res,next) => {
      res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}
