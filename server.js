var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.use(function(req, res, next){
  res.redirect('/');
});

app.listen(process.env.PORT || 3000);

//git add -A
//git commit -m "Hi"
//git push -u origin master