
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3002,
  mongoose = require('mongoose'),
  Wine = require('./api/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser');
var cors = require('cors');
app.use(cors());
// mongoose instance connection url connection
mongoose.Promise = global.Promise;

var mongoURI ='mongodb://localhost/wine'; 
mongoose.connect(mongoURI).then(function(){
    console.log("connect succesful");
    //connected successfully
}, function(err) {
    console.log("error:" + err);
    //err handle
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
