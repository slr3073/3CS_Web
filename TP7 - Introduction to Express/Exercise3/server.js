//region Imports
const express = require('express')
const http = require('http')
//endregion

function LaunchServer() {
    let app = express()
    app.set('view engine','pug')
    app.set('views','views/')

    let server = http.createServer(app)
    server.listen(3000)

    app.get('/userin', (req, res) => {
        let firstTime = true
        if(users.has(req.query.username))
            firstTime = false
        else
            users.add(req.query.username)

        res.render("index", { username: req.query.username, firstTime: firstTime })
    })
}

let users = new Set();
LaunchServer()