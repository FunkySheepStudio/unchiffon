const http = require('http')
const https = require('https')
const express = require('express');
const fs = require('fs')
const path = require('path')

const app = express();


app.use(express.json({limit: '1mb'}))

// Client static files
app.use(express.static(path.join(__dirname, '../client')))
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
})

const server = http.createServer(app);

server.listen(80);