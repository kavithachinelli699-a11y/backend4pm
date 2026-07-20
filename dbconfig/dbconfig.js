const mongoose = require('mongoose');
const conUrl = "mongodb+srv://kavithachinelli699_db_user:b99sfaIhPGLogPYv@mern.xluddtu.mongodb.net/mern4pm?appName=mern";

mongoose.connect(conUrl)
.then(() =>{
    console.log("Connected to MongoDB");
})
.catch(err => {
    console.error("Error connecting to MongoDB", err);
});

