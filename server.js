var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;
const ENV = app.settings.env;
const DEV_ENV = "development";

app.use(function(req, res, next) {
    if (ENV !== DEV_ENV) {
        if (req.headers['x-forwarded-proto'] === 'http') {
            next();
        } else {
            res.redirect('http://' + req.hostname + req.url);
        }
    }
});

app.use(express.static('public'));

app.listen(PORT, function() {
    console.log(app.settings.env);
    console.log('Express server is up on port ' + PORT);
})
