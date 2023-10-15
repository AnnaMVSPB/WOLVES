const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const fileUpload = require('express-fileupload');
const sessionConfig = require('./sessionConfig');

const serverConfig = (app) => {
  app.use(fileUpload());
  app.use(morgan('dev'));
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
};

module.exports = serverConfig;
