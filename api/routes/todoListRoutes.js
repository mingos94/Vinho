
'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  app.route('/wines')
    .get(todoList.list_all_wines)
    .post(todoList.create_a_wine);


  app.route('/wines/:wineId')
    .get(todoList.read_a_wine)
    .put(todoList.update_a_wine)
    .delete(todoList.delete_a_wine);
};
