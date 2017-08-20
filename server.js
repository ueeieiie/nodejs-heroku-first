const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
let apis = require('./BE/apis');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('app'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', apis);
 
app.listen(port); 

console.log('server runs on port', port );

