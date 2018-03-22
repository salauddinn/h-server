'use strict';
module.exports = function(app) {
  var userList = require('../controllers/loginController');
    app.route('/login')
      .post(userList.login);
    app.route('/authenticate')
        .post(userList.authenticate);
    app.route('/agent')
        .get(userList.browser);
    app.route('/signup')
      .post(userList.create_a_user);
};
