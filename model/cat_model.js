var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    category_name:{
        type:String
    }
})
module.exports = mongoose.model('category',schema)
