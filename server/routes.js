const controllers = require('./controllers.js');

module.exports = app => {

  app
    .get('/api/cakes/:id', controllers.getOneCake)
    .get('/api/cakes', controllers.getAllCakes)
    .post('/api/cakes', controllers.createCake)
    .put('/api/cakes/:id', controllers.updateCake)
    .delete('/api/cakes/:id', controllers.deleteCake);
}
