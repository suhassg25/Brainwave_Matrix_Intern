const mongo = require("mongoose");
mongo.connect("mongodb://127.0.0.1:27017/blog").then(() => console.log('connected Mongo DB')).catch((err) => console.log('mongo Error', err));

const schema = mongo.Schema({
    post: { type: String, },
    title: { type: String, required: true },
    content: { type: String, required: true }
});

const Posts = mongo.model("posts", schema);

module.exports = Posts;
