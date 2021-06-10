const app = require('express');

const router = app.Router();

// @route  get api/users
// @desc   Test route
// @access Public 
router.get('/',(req,res)=>{ res.send("Userr route")});

module.exports = router; 