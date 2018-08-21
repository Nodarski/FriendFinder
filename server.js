var cors = require('cors');
var bodyParser = require('body-parser');
var app = require('express')();


var port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(cors({credentials: true, origin: true}));

require('./app/routing/htmlRoutes')(app);

require('./app/routing/apiRoutes')(app);

app.listen(port, function() {
    console.log(`Listening on port: ${port}`);
});

var friends = require('./app/data/friends');
console.log(friends);