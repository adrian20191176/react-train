const app = require('express');

const router = app.Router();
const auth = require('../middleware/auth');

const User = require('../../model/User')

// @route  get api/auth
// @desc   Test route
// @access Public 
router.get('/',auth,async (req,res)=>{ 
    try{
        // const use  = await User.findById(req.user.id)

        res.json(use);
    }catch(err){
        console.err(err.message);
        res,status(500).send("Server Error")
    }

});

module.exports = router; 