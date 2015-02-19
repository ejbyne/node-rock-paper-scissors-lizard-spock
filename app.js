var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use('/public', express.static('public'));

app.get('/', function(req, res) {
  res.render('index');
});

server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;
