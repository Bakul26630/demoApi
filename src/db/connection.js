
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/students").then(()=>{
    console.log("Connection to the database is successful...");
}).catch(()=>{
    console.log("Unable to connect with the database...");
}
);

