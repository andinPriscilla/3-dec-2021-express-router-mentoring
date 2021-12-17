const express = require('express');
const app = express();     // here i initialize the server and savng it in the variable app
const items = require('./routes/items.js');
 const userRoute = require('./routes/usersRoute.js'); 
const mongoose = require('mongoose');

/* connect to daatbase */

mongoose.connect("mongodb+srv://andy:rudolf2009@cluster0.5vmti.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

mongoose.connection.on("error",console.error)
mongoose.connection.on("open",()=> {
    console.log("Database connected ...")
})

app.use(express.urlencoded({extended: true}))

const port = process.env.port || 5000;


app.use("/items", items); // this is the middleware .app was replace in  items.js as router app.use("/user",userRoute)
app.use("/user",userRoute)

// http://localhost:5000/

/* const book =[ 
    {
    id: "1121324256",
    title: "js",
    author: "pris",
    year: "2009",
    },

    {
        id: "112",
        title: "ms",
        author: "kan",
        year: "2000",
        }
]
 */

app.get('/', (req, res) => {
    res.send("Hello");
})



app.listen(port,() => {
    console.log('listening on port: ',port)
})

