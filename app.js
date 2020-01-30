var express = require('express');
var app = express();

app.get('/', function (req, res) {
  let times = process.env.TIMES;
  res.send("Times="+times);
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);