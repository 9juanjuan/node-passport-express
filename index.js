
require('dotenv').config(); 
const PORT = process.env.PORT
const express = require('express'); 
const app = express(); 

const FileStore = require('session-file-store')(session);

// const S3KRET = require('./config');

// tell express to use the session modules
app.use(session({
    store: new FileStore(),  // no options for now
    secret: process.env.SESSION_SECRET
}));



app.get('/', (req, res) => {
    res.send(`
        <h1>Hello There</h1>
    `)

});



app.listen(PORT, () => {
    console.log(`You're running on port ${PORT}`)


})