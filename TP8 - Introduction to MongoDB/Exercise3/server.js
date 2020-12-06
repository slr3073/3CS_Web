// region Imports
const express = require('express')
const app = express()
const http = require('http').createServer(app)
const mongodb = require('mongodb')
// endregion

const MongoClient = mongodb.MongoClient;

function LaunchServer() {
    app.get('/', (request, result1) => {
        MongoClient.connect('mongodb://mongodb:27017', (error1, db) => {
            let dbo = db.db("test")
            dbo.collection("users").find({}).toArray((error2, result2) => {
                if (error2) throw error2
                result1.send(result2)
                db.close()
            })
        })
    })

    http.listen(3000)
}

LaunchServer()