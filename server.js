const express = require('express');
const path = require('path');

const app = express();
app.use(express.urlencoded());
const port = 3000;
const url = '127.0.0.1';

//load routes file
const routes = require('./routes');
global.__rootDir = require('path').dirname(require.main.filename);

//app.get('/', (req, res) => res.send('Hello World!'))

app.use('/', routes);
app.use(express.static(path.join(__dirname, 'js')));


app.listen(port, url, () => console.log(`Example app listening at URL: http://${url}:${port}`))

//do this