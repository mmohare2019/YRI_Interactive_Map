// server application main file

const express = require("express")
const path = require('path');
const app = express()

app.use(express.static(path.join(__dirname, 'react-app/build')));

app.listen(3000)