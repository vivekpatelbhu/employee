let user = require('./userRoutes');

module.exports = function(app){

    app.use('/api',user)
}
