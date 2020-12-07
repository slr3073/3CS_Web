const express = require('express')
const app = express()
const http = require('http').createServer(app)
const MongoClient = require('mongodb').MongoClient

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/books.html')
})

app.get('/books', (request, res) => {
    MongoClient.connect('mongodb://mongodb:27017', (err, db) => {
        let q = request.query.queryTitle
        if (err) throw err
        let dbo = db.db("test")
        try {
            dbo.collection("books").find({"title": {$regex: new RegExp(q, "i")}}).toArray((err, result) => {
                if (err) throw err
                res.send(result)
                db.close()
            })
        } catch (e) {
            res.send([])
        }
    })
})

http.listen(3000);

