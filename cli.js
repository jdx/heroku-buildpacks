var github = require('./github')

github.fetchInfo('ryandotsmith', 'nginx-buildpack', function (err, repo) {
  if (err) { throw err }
  console.log(repo)
})
