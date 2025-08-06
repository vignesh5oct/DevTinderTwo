const mongoose = require('mongoose');


const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://vignesh5oct:Vignesh%40123@hmscluster.j15sl0e.mongodb.net/devTinder')
}


module.exports = connectDB;