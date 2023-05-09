const mongoose = require('mongoose');
const dotenv = require('dotenv');


// env config
dotenv.config();

const URL = process.env.DB_CONNECTION_URL || "mongodb://localhost:27017";
const connectDB = async () => {
    try {

        await mongoose.connect(URL);
        console.log('Database connected');

    } catch (error) {
        console.log(`Database connection error: ${error}`)
    }
}

module.exports = connectDB;