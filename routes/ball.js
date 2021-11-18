var express = require('express'); 
const ball_controlers= require('../controllers/ball'); 
var router = express.Router(); 
 
/* GET balls */ 
router.get('/', ball_controlers.ball_view_all_Page ); 
module.exports = router; 
/* GET detail ball page */ 
router.get('/detail', ball_controlers.ball_view_one_Page); 
/* GET create ball page */ 
router.get('/create', ball_controlers.ball_create_Page); 
/* GET create update page */ 
router.get('/update', ball_controlers.ball_update_Page);
/* GET create costume page */ 
router.get('/delete', ball_controlers.ball_delete_Page); 
 