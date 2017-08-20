const express = require('express');
const morgan = require('morgan');
const apis = require('./BE/apis');
const bodyParser = require('body-parser');
const port = process.env.port || 3000;

// Run Express app
const app = express();

//Body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Static folder
app.use(express.static('app'));

// Print logs
// app.use(morgan('dev'));

// Routes
app.post('/test', (req, res)=>{
    console.log("*******************************************************");
    res.send(req.query);
    console.log(req.body);
    res.end();
});


// Start listening to requests
app.listen(port); 
console.log('server runs on port', port );


// app.use('/', apis);

