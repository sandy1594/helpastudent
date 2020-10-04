const Router = require('express').Router();
const  a = require('./donnie.js')
const b = require('./donnors.js')
Router.use('/donnie',a)
Router.use('/donnie',b)
module.exports = Router;