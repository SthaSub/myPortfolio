const router = require('express').Router();
const store = require('../storage/store.json');
router.get('/',(req, res)=>{
    res.render('home',{home:store.home});
});


module.exports = router;