var express = require('express');
var router = express.Router();


var maincontrol = require('../control/control');
// cat and sub insert
router.post('/category',maincontrol.cat_insert);
router.post('/subcategory',maincontrol.subcat_insert);


// cat and sub select
router.get('/category',maincontrol.cat_selectdata);
router.get('/subcategory',maincontrol.subcat_selectdata);

router.get('/cat/:id',maincontrol.get_cat)



module.exports = router;
