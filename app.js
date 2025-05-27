const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Heyyy Aryan This Side!!! Hope You Find My Videos '));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
    
