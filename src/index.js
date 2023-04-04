const express = require('express');
// const bodyParser = require('body-parser')
const http = require('http');
const router = require('./Routes/router.js');
const mongoose = require('./config/dbConfig');

require('dotenv').config();
let app = express();
app.use(express.urlencoded({ extended: true }), express.json());
app.use(router);
let port = 5000;

app.use(router);

let server = http.createServer(app);




server.listen(port, () => {
    console.log(`server is listeninig on port ${port}`);
})
