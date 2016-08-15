console.log("Welcome to Intro to Node!");
// Create an Express app
// https://expressjs.com/en/starter/hello-world.html
var express = require('express');
var jade = require('jade');
var app = express();
var homeCtrl = require('./controllers/homeCtrl') ; 
var acctsCtrl = require('./controllers/accountsCtrl') ; 
 
 
app.set('views', './views');
app.set('view engine', 'jade');  
app.use(express.static('public'));
app.use(express.static('node_modules')); 

//--- check if the homeCtrl file is included----/
console.log('the home control-->'+homeCtrl.home);  
  
// Request response handling---
app.get('/',homeCtrl.home); 
app.get('/accounts',acctsCtrl.accounts); 
 
  
// Start your Express app up on port 3000
//---starting the server--------
app.listen(8080, function () { 
  console.log('Example app listening on port 8080!');
});   