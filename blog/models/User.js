const mongo = require('mongoose');
const option = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
const ms = mongo.Schema({
    name : {type:String, required:true},
    email : {type:String, required:true, unique : true, trim : true, lowercase : true, unique : true},
    password : {type:String, required:true, minlength:6}
})

const User = mongo.model('user',ms);

module.exports = User;