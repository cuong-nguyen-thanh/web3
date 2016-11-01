var fs = require('fs');

module.exports.readFile = function(file, done) {
  fs.readFile(file, function(err, logData) {
      if (err) {
        done(err);
        return;
      }

      // logData is a Buffer, convert to string.
      var text = logData.toString();
      var results = {};

      // Break up the file into lines.
      var lines = text.split('\n');

      lines.forEach(function(line) {
          var parts = line.split(' ');
          var letter = parts[1];
          var count = parseInt(parts[2]);

          if (!results[letter]) {
              results[letter] = 0;
          }

          results[letter] += parseInt(count);
      });

      done(null, results);
  });
}
