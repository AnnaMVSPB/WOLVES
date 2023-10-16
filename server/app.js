
require('dotenv').config();
const express = require('express');
const path = require('path');
const serverConfig = require('./config/serverConfig');

const app = express();

const { PORT } = process.env;
serverConfig(app);
const indexRoute = require('./routes/index.route');
app.use(express.static(path.join(__dirname, '../client/build')));


app.use('/', indexRoute);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
  });
app.listen(PORT, () => console.log(`наш сервер пашет на ${PORT}  порту`));
