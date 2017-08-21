const express = require('express');
const morgan = require('morgan');
const apis = require('./BE/apis');
const bodyParser = require('body-parser');
const port = process.env.port || 3000;

// Run Express app
const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: true});
const jsonParser = bodyParser.json();
//Body-parser

//Static folder
app.use(express.static('app'));

app.use(urlencodedParser);
// Print logs
app.use(morgan('dev'));

// Routes
app.use('/', apis);

// app.post('/test', (req, res)=>{
//     console.log("*******************************************************");
//     res.send(req.body);
//     console.log(req.body);
//     res.end();
// });


// Start listening to requests
app.listen(port); 
console.log('server runs on port', port );



