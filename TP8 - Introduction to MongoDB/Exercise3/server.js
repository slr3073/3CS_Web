//region Imports
const express = require('express')
const http = require('http')
const mongodb = require('mongodb')
//endregion

function LauchServer(){
    const mongoClient = mongodb.MongoClient
    const app = express();
    const url_db = 'mongodb://mongodb:27017'

    app.set('view engine','pug')
    app.set('views','views/')

    app.get('/', (request, result) => {
        mongoClient.connect(url_db, (error, db) => {
            let dbo = db.db("test")
            dbo.collection("users").find({}).toArray( (error2, result2) => {
                if (error2) throw error2

                result.render('index',{})
                db.close()
            })
        })
    })

    let server = http.createServer(app)
    server.listen(3000)
}

LauchServer()


