const express = require('express');
const app = express();     // here i initialize the server
const items = require('./routes/items.js');


const port = process.env.port || 5000;


app.use("/items", items); // this is the middleware .app was replace in  items.js as router

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