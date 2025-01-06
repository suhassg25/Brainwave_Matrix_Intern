const app = require("express");
const cors = require('cors');
app().use(cors());
app().use(cors({
    origin: 'http://127.0.0.1:5500' // Allow only this origin
  }));
app().set({"Content-Type":"application/json"});
const userRoute = app.Router();
const User = require("../models/User");

userRoute.route("/").get(async(req,res)=>{
    res.status(200).json({userCollection : await User.find()});
}).post(async(req,res)=>{
try{
        const userNew = new User({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
            })

            await userNew.save();
            res.status(200).json({"saved":userNew});

}catch(err){
    res.status(500).json({error : err})
}
})

userRoute.route("/:id").delete(async(req,res)=>{
    try{
       await User.findByIdAndDelete(req.params.id);
       res.status(200).json({"success":"deleted Succesfully"});
    }catch (err){
        res.status(500).json({error : err})
    }
}).get(async(req,res)=>{
    try{
        res.status(200).json({"Users" : await User.findById(req.params.id)});
    }
    catch(err){
        res.status(500).json({error : err})
    }
})


module.exports = userRoute;