var request = require('request');
var yaml = require('yaml-js');
var fs = require('fs');

request('https://raw.github.com/FortAwesome/Font-Awesome/master/src/icons.yml', function (err, response, body) {
  fs.writeFileSync(__dirname + '/icons.js', 'module.exports = ' + JSON.stringify(yaml.load(body).icons));
});
