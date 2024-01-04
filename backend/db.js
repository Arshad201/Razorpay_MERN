const mongoose = require("mongoose");

const connectToDB = async () =>{
    try {
        const {connection} = await mongoose.connect(process.env.DB_URI, {
          });

        console.log(`Database is connect on host -> ${connection.host}`);
    } catch (error) {
        console.log(error); 
    }
}

module.exports = connectToDB