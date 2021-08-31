const mongoose = require('mongoose');
// creating a database connection
mongoose.connect("mongodb://localhost:27017/Prathikdynamic", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("connected to Prathikdynamic");
}).catch((error) => {
    console.log(error);
})
