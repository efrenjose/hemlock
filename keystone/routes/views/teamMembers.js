var keystone = require('keystone');
var TeamMember = keystone.list('TeamMember');

module.exports = function (req, res) {
    
    TeamMember.model.find()
        .exec(function(err, docs) {
            res.send(docs);
    });
};