var express = require('express');
var request = require('request');
var app = express();

//      app setup
app.set('view engine', 'ejs');


//      Routes

// / (search on homepage)
app.get('/', function(req, res){
  res.render('home');
});

// /results
app.get('/results', function(req, res){
  var mySearch = req.query.search;
  request("https://swapi.co/api/people/?search="+ mySearch, function(error, response, body){
    var myData = JSON.parse(body);
    if(!error && response.statusCode === 200){
      res.render('results', {data: myData});
    }else{
      console.log(error);
    }
  });
});








//      listner
app.listen(3000, function(){
  console.log('Server Started...');
});
