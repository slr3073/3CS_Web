//region Imports
const express = require('express')
const http = require('http')
const fs = require('fs')
//endregion

function LaunchServer() {
    let app = express()
    app.set('view engine','pug')
    app.set('views','website/views/')

    let server = http.createServer(app)
    server.listen(3000)

    app.get('/dinopedia', (req, res) => {
        if(req.query.dinosaure in dinoData)
            res.render("index", dinoData[req.query.dinosaure])
        else
            res.sendStatus(404)
    })

    app.use('/images', express.static(__dirname+'/website/images'))
}

let dinoData = JSON.parse(fs.readFileSync("website/dinos.json"))
LaunchServer()