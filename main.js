var fileUtils = require('./fileUtils');
process.argv.splice(0, 2);
var fileInputs = process.argv;

if (fileInputs.length > 1) {
  var fileOutput = fileInputs.splice(-1, 1);
  fileUtils.readFiles(fileInputs, function(err, data){
    fileUtils.writeFile(fileOutput[0], data);
  });
}
