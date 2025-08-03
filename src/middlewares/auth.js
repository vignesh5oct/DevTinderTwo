const adminAuth = (req,res,next)=>{
    console.log("Admin authentication middleware");
    const token = "vvv";
    if(token==="vvv"){
        next();
    }
    else{
        res.status(401).send("Unauthorized access");
    }
}

const userAuth = (req,res,next)=>{
    console.log("User authentication middleware");
    const token = "vvv";
    if(token==="vvv"){
        next();
    }
    else{
        res.status(401).send("Unauthorized access");
    }
}



module.exports = { userAuth,adminAuth };