var mongoose = require('mongoose');
var subcatschema = new mongoose.Schema({
    subcategory:{
        type:String
    },
    cat_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category"
    }
})
module.exports = mongoose.model('subcatgory',subcatschema)