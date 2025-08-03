const express = require('express');

const app = express();

const { userAuth, adminAuth } = require('./middlewares/auth');

app.use("/admin",adminAuth)



app.get("/admin/profile",(req,res)=>{
    throw new Error("This is an error from admin profile route");
    res.send("Admin page");
})

app.use("/",(err, req, res, next) => {
    console.error(err.message,"********************");
    if (err) {
        return res.status(500).send('Something broke!');
    }
});



app.get("/profile",userAuth,(req,res)=>{
    res.send("User profile page");
})





// app.get("/user/:userId/:name",(req,res)=>{
//     console.log(req.params,"********");
    
//     res.send({firstName: "Vignesh", lastName: "G"});
// })




app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
