var express=require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var app=express();

app.use(express.static(__dirname + './index.html'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


var port = process.env.PORT || 3000;



app.use(express.static(__dirname + '/public'));

app.listen(port,function(){
  console.log('App running on PROT : '+ port,'\nPress Ctrl + C to terminate');
});

mongoose.connect('localhost', 'replenishment', function(err){
  if(err){
    console.log('Database connection error: ' + err);
    process.exit(1);
  }
});

mongoose.connection.on('connected', function() {
  //var walmart = require('./server/models/model.walmart')(app);
  require('./server/models/model.forcast')(app);
  require('./server/routes/routes.forcast')(app);
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});
