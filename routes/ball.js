var express = require('express'); 
const ball_controlers= require('../controllers/ball'); 
var router = express.Router(); 

// A little function to check if we have an authorized user and continue on
// or;
// redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
      return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
  };
 
/* GET balls */ 
router.get('/', ball_controlers.ball_view_all_Page ); 
module.exports = router; 
/* GET detail ball page */ 
router.get('/detail', ball_controlers.ball_view_one_Page); 
/* GET create ball page */ 
router.get('/create',secured, ball_controlers.ball_create_Page); 
/* GET create update page */ 
router.get('/update',secured, ball_controlers.ball_update_Page);
/* GET create costume page */ 
router.get('/delete',secured, ball_controlers.ball_delete_Page); 