//region Imports
const express = require('express')
const http = require('http')
//endregion

function LaunchServer() {
    let app = express()
    let server = http.createServer(app)
    server.listen(3000)
    app.use('/', express.static('GrumpyCatWebsite'));
}

LaunchServer()

