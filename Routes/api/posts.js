const app = require('express');

const router = app.Router();

// @route  get api/posts
// @desc   Test route
// @access Public 
router.get('/',(req,res)=>{ res.send("Posts route")});

module.exports = router; 