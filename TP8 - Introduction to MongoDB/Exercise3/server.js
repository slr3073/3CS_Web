// region Imports
const express = require('express')
const http = require('http')
const mongodb = require('mongodb')
const bodyParser = require('body-parser')
// endregion

const app = express()
app.use(bodyParser.json());
const server = http.createServer(app)
const MongoClient = mongodb.MongoClient;
server.listen(3000)

function LaunchJSONServer() {
    app.get('/', (request, result1) => {
        MongoClient.connect('mongodb://mongodb:27017', (error1, db) => {
            let dbo = db.db("test")
            dbo.collection("users").find({}).toArray((error2, usersArray) => {
                if (error2) throw error2
                result1.send({usersArray})
                db.close()
            })
        })
    })

}

function LaunchPUGServer() {
    app.set('view engine', 'pug')
    app.set('views', 'views/')

    app.get('/', (request, result1) => {
        MongoClient.connect('mongodb://mongodb:27017', (error1, db) => {
            let dbo = db.db("test2")
            dbo.collection("users").find({}).toArray((error2, usersArray) => {
                if (error2) throw error2
                result1.render("index", {users: usersArray})
                db.close()
            })
        })
    })

    app.post('/testAdd', (request, result) => {
        MongoClient.connect('mongodb://mongodb:27017', (error1, db) => {
            let dbo = db.db("test2")
            let user = {username: request.body.username, admin: request.body.admin}

            dbo.collection("users").insertOne(user, (error2) => {
                if (error2) throw error2
                result.json({status: 0, message: 'insert successful'})
                db.close()
            })
        })
    })

}

//LaunchJSONServer()
LaunchPUGServer()