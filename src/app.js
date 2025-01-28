const express = require('express');
const cors = require('cors');
const router = require('./routes');
const errorMiddleware = require('./error/errorMiddleware');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', router);
app.use(errorMiddleware);

module.exports = app;