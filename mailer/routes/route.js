const router=require('express').Router();

const {signup,getBill} = require('../controller/appcontroller.js')
// Http Request
router.post('/user/signup',signup);
router.post('/user/getBill',getBill);

module.exports = router;