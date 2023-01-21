const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const Annonce = require("./models/annonceModel");
const annonceRoutes = require("./routes/annonceRoute");
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors())
app.use("/api/annonces",annonceRoutes);


const PORT = process.env.PORT || 5000

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on ${PORT}`)
        });
    })
    .catch((err) => console.log(err));


