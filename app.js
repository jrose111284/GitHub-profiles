var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));
app.set('views', __dirname + '/');

app.get('/', function (req, res) {
  res.render('./index');
});

// app.set('port', (process.env.PORT || 3000));

app.listen(process.env.PORT || 3000, function() {
  console.log('Node app is running on port', app.get('port'));
});
