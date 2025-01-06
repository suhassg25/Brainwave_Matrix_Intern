const express = require('express');
express().set({"Content-Type":"application/json"})
const postRoute = express.Router();
express().use(require('cors')())
const Posts = require('../models/posts');

postRoute.get("/", async(req, res) => {
    let obj = await Posts.find();
    return res.status(200).json({ postCollection : obj })
})

postRoute.post("/", async (req, res) => {
    try {
        const data = new Posts({
            post : req.body.post,
            title : req.body.title,
            content : req.body.content
        });
        await data.save();
        return res.status(200).json({ success: "saved", post: data });
    }
    catch (err) {

        return res.status(500).json({ error: err });
    }
});

postRoute.route("/:id").delete(async(req,res)=>{
    try{
        await Posts.findByIdAndDelete(req.params.id);
        res.status(200).json({ response : "Deleted Post of id "+req.params.id})
    }
    catch(err){
        res.status(500).json({Not_Found : "id does not Exists"})
    }
}).get(async(req,res)=>{
    try{
        res.status(200).json({"Post" : await Posts.findById(req.params.id)});      
    }
    catch(err){
        res.status(500).json({Not_Found : "id does not Exists"})
    }
})





module.exports = postRoute;