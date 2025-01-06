const mongo = require("mongoose");


const Comments = mongo.model('comments', mongo.Schema({
    post_id: String,
    comments: String
}));

module.exports = Comments;

