const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/authors", {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useFindAndModify: false
})
    .then(() => console.log("Established a connection to the authors database"))
    .catch( (err) => console.log("Something went wrong when connecting to the authors database", err))
