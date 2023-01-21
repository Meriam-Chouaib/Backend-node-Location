const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const connectDB = async () =>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected`)
    }catch (e) {
        console.log(e)
        process.exit(1)
    }
}
module.exports = connectDB //name of the file is connectDB

//use this function in server.js to connect to mongoDB and start te server

// const startServer = async () =>{
//     try {
//         await connectDB();
//         app.listen(PORT, () =>{
//             console.log(`Server running on ${PORT}`)
//         });
//     }catch (e) {
//         console.log(e)
//     }
// };
// startServer();