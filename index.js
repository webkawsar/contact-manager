const express = require('express');
const app = express();
const contactRoutes = require('./routes/contactRoutes');
const connectDB = require('./config/db');
const dotenv = require('dotenv');


// env config
dotenv.config();

// database connection
connectDB()



// middlewares
app.use(express.json());


// routes
app.use('/api/v1/contacts', contactRoutes);



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port @ ${PORT}`);
})