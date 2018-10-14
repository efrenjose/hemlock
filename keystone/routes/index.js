var keystone = require('keystone');
var importRoutes = keystone.importer(__dirname);
var cors = require('cors');

var routes = {
    views: importRoutes('./views'),
    api: importRoutes('./api'),
}

exports = module.exports = function(app) {
    app.use(cors());
    // app.use(function(req, res, next) {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    //     next();
    //   });

    app.get('/', routes.views.index);
    app.get('/add-event', routes.views.addEvent);
    app.post('/add-event', routes.api.event.post)
    app.get('/team-members', routes.views.teamMembers)
};