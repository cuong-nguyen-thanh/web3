var fs = require('fs');
var readMultipleFiles = require('read-multiple-files');

var ext = module.exports;

function addData(data, results) {
    var text = data.toString();
    var results = results || {};

    var lines = text.split('\n');

    lines.forEach(function(line) {
        var parts = line.split(' ');
        if (parts.length > 2) {
            var letter = parts[1];
            var count = parseInt(parts[2]);

            if (!results[letter]) {
                results[letter] = 0;
            }

            results[letter] += parseInt(count);
        }
    });
}

ext.readFile = function(file, done) {
    fs.readFile(file, function(err, logData) {
        if (err) {
            done(err);
            return;
        }
        var results = {};
        addData(logData, results);
        done(null, results);
    });
}

ext.readFiles = function(files, done) {
    readMultipleFiles(files, function(err, data) {
        if (err) {
            throw err;
        }
        var results = {};
        data.forEach(function(item, idx) {
            addData(item, results);
        })
        done(null, results);
    });
}

ext.writeFile = function(file, data) {
    var content = '';
    for (field in data) {
        content = `${content}${field} ${data[field]}${os.EOL}`;
    }
    fs.writeFile(file, content, function(err) {
        if (err) throw err;
        console.log(`The data was saved to ${file}`);
    });
}
