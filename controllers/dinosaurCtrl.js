// request module: https://www.npmjs.com/package/request
// Passing arguments to a template: http://expressjs.com/en/api.html#res.render

var fs = require("fs");
var path = require("path");
var jsonPath = path.join(__dirname, '/../database/dinosaurs.json');
exports.results = function(req,res){
    fs.readFile(jsonPath, function (err, data) {
        if (err) {return console.error(err)};
        console.log(data); 
        res.render('dino', { title :"dinos",data: JSON.parse(data) });
    });
}
 