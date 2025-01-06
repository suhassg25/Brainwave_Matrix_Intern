const express = require("express");
const commentsRoutes = express.Router();

const Comments = require("../models/comments");

commentsRoutes.post("/:p_id", async (req, res) => {
    try {
        const newComment = new Comments({
            post_id: req.params.p_id,
            comments: req.body.comments
        })
        await newComment.save();
        res.status(201).json({ "success": "Commented to  post" })
    } catch (err) {
        res.status(500).json({ error: err });
    }
});
commentsRoutes.get("/",async(req,res)=>{
    try{
        res.status(200).json({"All Comments": await Comments.find()})
    }catch (err){
        res.status(500).json({ error: err });  
    }
})

commentsRoutes.delete("/:id", async (req, res) => {
    try {
          await Comments.findByIdAndDelete(req.params.id);
          res.status(200).json({"success":"Deleted Comment"})
    }catch (err){
        res.status(500).json({error : err})
    }
})
commentsRoutes.get("/:p_id", async (req, res) => {
    try {
        res.status(201).json({ "success": await Comments.find({post_id : req.params.p_id}) })
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

module.exports = commentsRoutes;