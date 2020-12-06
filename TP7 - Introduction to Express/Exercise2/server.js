//region Imports
const express = require('express')
const http = require('http')
const fs = require('fs')
//endregion

function LaunchServer() {
    let app = express()
    let server = http.createServer(app)
    let rules = JSON.parse(fs.readFileSync('rules.json'))

    server.listen(3000)
    app.get('/',function(request, response){
        response.sendFile("RPC7_Website/index.html", { root : __dirname})
    })

    app.use('/', express.static('RPC7_Website'));

    app.get('/fight',(request,result) => {
        let playerChoice = request.query.playerChoice
        let cpuChoice = request.query.cpuChoice

        if(playerChoice === cpuChoice)
            result.json({outcome:0})
        else if (rules[playerChoice][cpuChoice])
            result.json({outcome:1,message:rules[playerChoice][cpuChoice]})
        else
            result.json({outcome:-1,message:rules[cpuChoice][playerChoice]})

    })
}

LaunchServer()