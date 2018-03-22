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
    res.set('Access-Control-Allow-Origin', '*');
        if( req.body.password ==="396"){
            res.json({ isAuthenticated: true});
            }
        else {
            res.json({ isAuthenticated: false });
        }
    };

exports.authenticate = function (req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    if( req.body.password === "396" && req.body.username === "Elli08"){
        res.json({ isAuthenticated: true});
    }
    else {
        res.json({ isAuthenticated: false });
    }
};

exports.browser= function (req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    console.log(req.headers['user-agent'])
}
exports.create_a_user = function(req, res) {
  var new_user = new User(req.body);

  new_user.save(function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'Congratulations!!! '+user.username+' your account successfully activated' });
  });
};

