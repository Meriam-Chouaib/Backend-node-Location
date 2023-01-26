const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const Annonce = require("./models/annonce.model");



const annonceRoutes = require("./routes/annonce.routes");
const cors = require('cors')
const db = require("./models");
const dbConfig = require("./config/db.config");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors())
app.use("/api/annonces",annonceRoutes);


const Role = db.role;
// app.use('./routes/auth.routes')
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

const PORT = process.env.PORT || 5000

// mongoose
//     .connect(process.env.MONGO_URI)
//     .then(() => {
//         app.listen(PORT, () => {
//             console.log(`Server running on ${PORT}`)
//         });
//     })
//     .catch((err) => console.log(err));

db.mongoose
    .connect(`mongodb+srv://admin:admin@locationmaisoncluster.rltemcv.mongodb.net/LocationCollection?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        app.listen(PORT, () => {
          console.log(`Server running on ${PORT}`)
         });
        console.log("Successfully connect to MongoDB.");
        initial();
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });
function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "user"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'user' to roles collection");
            });

            new Role({
                name: "moderator"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'moderator' to roles collection");
            });

            new Role({
                name: "admin"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'admin' to roles collection");
            });
        }
    });
}

