// fs module: https://nodejs.org/api/fs.html#fs_fs_readfile_file_options_callback
// path module: https://nodejs.org/api/path.html#path_path_join_path
var path = require('path');
var fs = require('fs');
var jsonPath = path.join(__dirname, '/../database/dinosaurs.json');

exports.dinosaurs = function (req, res) {
  fs.readFile(jsonPath, 'utf-8', function(err, data) {
    if (err) throw err;
    res.send(JSON.parse(data));
  });
}
exports.addDinosaur = function (req, res) {
  console.log(req.body);
  fs.readFile(jsonPath, 'utf-8', function(err, data) {
    if (err) throw err;
    
    var dataBase = JSON.parse(data);
    dataBase.push(req.body);
    dataBase = JSON.stringify(dataBase);

    fs.writeFile(jsonPath, dataBase, function(err, info) {
      if (err) throw err;
      res.send(JSON.parse(dataBase));
    });
  }); 
};
