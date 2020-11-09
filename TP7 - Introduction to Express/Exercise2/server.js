//region Imports
const express = require('express')
const http = require('http')
//endregion

function LaunchServer() {
    let app = express()
    let server = http.createServer(app)
    server.listen(3000)
    app.get('/',function(request, response){
        response.sendFile("RPC7_Website/index.html", { root : __dirname})
    })

    app.use('/', express.static('RPC7_Website'));
}

LaunchServer()