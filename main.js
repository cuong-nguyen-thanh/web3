var fileUtils = require('./fileUtils');
var fileInput = process.argv[2];

if (fileInput) {
  fileUtils.readFile(fileInput, function(err, data){
    console.log(data);
  });
};

//test