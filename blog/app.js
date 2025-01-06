const express = require('express');
const postRoute = require('./routes/postRoutes')
const bodyParser = require('body-parser');
const userRoute = require("./routes/userRoutes")
const app = express();
const cors = require('cors');
app.use(cors());
const PORT = 8089;
//app.use(express.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use("/posts",postRoute);
app.use("/users",userRoute);
app.use("/comments", require("./routes/commentRoutes"))
app.listen(PORT,()=>console.log(`server in port ${PORT} started`));


module.exports = app;