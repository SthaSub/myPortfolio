const router = require('express').Router();
const homeRoute = require('./home');
const contactRoute = require('./contact');
const portfolioRoute = require('./portfolio');

router.use('/',homeRoute);
router.use('/contact',contactRoute);
router.use('/portfolio',portfolioRoute);

module.exports = router;