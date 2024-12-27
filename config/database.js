const mongoose = require('mongoose')

module.exports.db = async(res,req) => {
    try {
        await mongoose.connect('mongodb+srv://category:1234@cluster0.dvhkc.mongodb.net/');
        console.log("db Connect");
        
    } catch (error) {
       console.log(error);
        
    }
}