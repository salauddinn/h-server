'use strict';


var mongoose = require('mongoose'),
  User = mongoose.model('Users');
exports.list_all_users = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.login = function (req, res) {

        if( req.body.password ==="!abcd1234"){
            res.json({ isAuthenticated: true});
            }
        else {
            res.json({ isAuthenticated: false });
        }



    };

exports.create_a_user = function(req, res) {
  var new_user = new User(req.body);

  new_user.save(function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'Congratulations!!! '+user.username+' your account successfully activated' });
  });
};

