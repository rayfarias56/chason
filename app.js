var express = require('express');
var app = express()
var path = require('path')

app.set('views', path.join(__dirname, 'app', 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', function(req, res) {
    res.render('index');
});


app.listen(1337);
console.log('Server is up and running');