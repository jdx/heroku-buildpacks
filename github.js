'use strict';
var request = require('request')

exports.fetchInfo = function (owner, name, callback) {
  request.get({
    url: 'https://api.github.com/repos/' + owner + '/' + name,
    json: true,
    headers: {
      "User-Agent": "Heroku"
    }
  }, function (err, _, repo) {
    callback(err, repo)
  })
}
