const router = require('express').Router();
const store = require('./../storage/store.json');

router.get('/',(req, res)=>{
        res.render('portfolio',{portfolios:store.portfolios});
});


module.exports = router;