var express = require('express'),
    app = express();

//Express 3
//app.configure(function() {
//    app.use(express.static(__dirname, '/'));
//});

//Express 4
app.use(express.static(__dirname, '/'));


app.get('/autoCompleteValues', function(req, res) {
    res.json(autoCompleteValues);
});

app.listen(9000);

