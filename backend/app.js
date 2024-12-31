import { signup } from './database.js';
import { fetchUser } from './database.js';
const express = require('express');
const https = require("https");
//const http = require("http");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();
const path = require('path');

// Increase max listeners limit
require('events').EventEmitter.defaultMaxListeners = 15;

const port = process.env.PORT || 3001;
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/test', (req, res) => {
    console.log('test');
    res.send('wow it works');
});

app.post('/api/login', async (req, res) => {
    console.log('login');
    console.log(req.body);
    try {
        // Add login logic here
        res.status(302).redirect('http://localhost:3000/');
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/api/signup', async (req, res) => {
    console.log(req.body);
    try {
        await signup(req.body.username, req.body.password);
        res.status(302).redirect('http://localhost:3000/');
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/api/userinfo', async (req, res) => {
    console.log(req.body);
    try {
        await fetchUser();
        res.send();
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).send('Internal Server Error');
    }
});

const httpsServer = https.createServer({
    key: fs.readFileSync(path.join(__dirname, "env", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "cert.pem"))
}, app);

httpsServer.listen(port, () => {
    console.log(`HTTPS server up and running on port ${port}`);
});
