require('dotenv').config();
const express = require('express');
var cors = require('cors')
const http = require('http');
const router = require('./model/Routes/router.js');
const mongoose = require('./config/dbConfig');
const app = express();
const Loggers = require('./loggers/loggers')


let server ;
     server= http.createServer(app);

const whitelist = ['*', '127.0.0.1:5502'];

const corsOptions = {
    origin(origin, callback) {
        if (whitelist.includes('*') || whitelist.includes(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Access denied'));
        }
    }
}

app.use(express.urlencoded({ extended: true }), express.json());
app.use(cors(corsOptions));



app.use(router);

const port = process.env.PORT || 7777;

server.listen(port, () => {
    Loggers.log('info', `server is listeninig on port ${port}`);
})
