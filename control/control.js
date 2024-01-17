var cat_model = require('../model/cat_model');
var subcat_model = require('../model/subcat');


/////////////////////////////////////////////////////////////////////////
exports.cat_insert = async(req,res) => {

    var data =await cat_model.create(req.body);
    res.status(200).json({
        status: 'success',
        data
    })
}
exports.subcat_insert = async(req,res) => {

    var data = await subcat_model.create(req.body);
    res.status(200).json({
        status: 'success',
        data
    })
}
/////////////////////////////////////////////////////////////////////////
exports.cat_selectdata = async(req,res) => {

    var data =await cat_model.find();
    res.status(200).json({
        status: 'success',
        data
    })
}
exports.subcat_selectdata = async(req,res) => {

    var data = await subcat_model.find().populate('cat_id');
    res.status(200).json({
        status: 'success',
        data
    })
}
exports.get_cat = async(req, res) =>{
    var cat_id = req.params.id;
    var data = await subcat_model.find({cat_id:cat_id});
    res.status(200).json({
        status: 'ok',
        data
    })
}