const app = require('express');

const router = app.Router();

// @route  get api/auth
// @desc   Test route
// @access Public 
router.get('/',(req,res)=>{ res.send("Auth route")});

module.exports = router; 