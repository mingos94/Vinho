
'use strict';


var mongoose = require('mongoose'),
  Wine = mongoose.model('vinho');

exports.list_all_wines = function(req, res) {
  Wine.find({}, function(err, wine) {
    if (err)
      res.send(err);
    res.json(wine);
  });
};


exports.create_a_wine = function(req, res) {
  var new_wine = new Wine(JSON.parse(req.query.teste.toString()));
  new_wine.save(function(err, wine) {
    if (err)
      res.send(err);
    res.json(wine);
  });
};


exports.read_a_wine = function(req, res) {
    Wine.findById(req.params.wineId, function(err, wine) {
    if (err)
      res.send(err);
    res.json(wine);
  });
};


exports.update_a_wine = function(req, res) {
    Wine.findOneAndUpdate({_id: req.params.wineId}, req.body, {new: true}, function(err, wine) {
    if (err)
      res.send(err);
    res.json(wine);
  });
};


exports.delete_a_wine = function(req, res) {

  Wine.remove({
    _id: req.params.wineId
  }, function(err, wine) {
    if (err)
      res.send(err);
    res.json({ message: 'Wine successfully deleted' });
  });
};

