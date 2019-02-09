require('./config/config');
require('./models/db');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const rtsIndex = require('./routes/index.router');

var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/', rtsIndex);

app.listen(process.env.PORT, () => console.log(`server starting at port: ${process.env.PORT}`));
