var express = require('express')
var session = require('express-session')
var app = express()

app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }))

app.get('/', function(req, res) {
 req.session.views = req.session.views ? req.session.views + 1 : 1;
 
req.session.a = 'firstname';
req.session.b = "lastname";

res.send("Views: " + req.session.views)

})


app.get('/profile' , function(req, res) {
 
  res.send("Viewsss: " + req.session.views + "    "  + req.session.a)
})

app.listen(3000)



