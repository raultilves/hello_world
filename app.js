var express = require('express');
var app = express();

app.get('/', function (req, res) {
  //res.send('Hello World!');
  res.send(process.env.TIMES);
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);