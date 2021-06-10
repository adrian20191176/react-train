const app = require('express');

const router = app.Router();

// @route  get api/profile
// @desc   Test route
// @access Public 
router.get('/',(req,res)=>{ res.send("Profile route")});

module.exports = router; 