/**
 * The Server Can be configured and created here...
 * 
 * You can find the JSON Data file here in the Data module. Feel free to impliment a framework if needed.
 */

/*
-- This is the product data, you can view it in the file itself for more details 
{
    "_id": "019",
    "isActive": "false",
    "price": "23.00",
    "picture": "/img/products/N16501_430.png",
    "name": "Damage Reverse Thickening Conditioner",
    "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
    "tags": [
        "ojon",
        "conditioner"
    ]
}
*/
const data = require('./data');
const express = require('express');
const http = require('http');
const cors = require('cors');
const hostname  = 'localhost';
const port = 3035;
const app = express();
const corsOptions = {
    origin: 'http://localhost:3030',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

/** 
 * Start the Node Server Here...
 * 
 * The http.createServer() method creates a new server that listens at the specified port.  
 * The requestListener function (function (req, res)) is executed each time the server gets a request. 
 * The Request object 'req' represents the request to the server.
 * The ServerResponse object 'res' represents the writable stream back to the client.
 */
const httpServer = http.createServer(app);
httpServer.listen(port);

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.header('Content-type', 'text-html');
    return res.end('Invalid route...');
});

app.get('/products', (req, res) => {
    res.header('Content-type', 'application/json');
    // .. Here you can create your data response in a JSON format
    const baseURL = 'http://' + req.headers.host + '/';
    const urlParams = new URL(req.url, baseURL);
    const { searchParams } = urlParams;
    const search = searchParams.get('search') && searchParams.get('search').toLowerCase();

    let responseData = [];
    if (search) {
        responseData = data.filter(i => 
            (i._id && i._id.toLowerCase().includes(search))
            || (i.name && i.name.toLowerCase().includes(search))
            || (i.about && i.about.toLowerCase().includes(search))
            || (i.tags && i.tags.length && i.tags.map(i => i.toLowerCase()).includes(search))
            || (i.price && i.price.includes(search))
        );
    } else {
        responseData = data;
    }
    return res.status(200).json(responseData);
});


console.log(`[Server running on ${hostname}:${port}]`);
