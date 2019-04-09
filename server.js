// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//const routes = require('./routes');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

app.get('*', (req, res) => res.sendFile(path.resolve('build', 'index.html'));

// Add routes, both API and View
//app.use(routes);

// Start the API server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});