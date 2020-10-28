const http = require('http')
const fs = require('fs')

function createSillyServer(){
    let app = http.createServer(function (request, response) {
        response.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'})
        response.write("Ce serveur ne sait rien dire d'autre que cela. oui oui")
        response.end()
    })

    app.listen(3000)
}

function createHTMLServer(){
    fs.readFile('./index.html', function (error, file) {
        if(error) throw err

        http.createServer(function (request, response) {
            response.writeHead(200, {"Content-Type": "text/html"})
            response.write(file)
            response.end()
        }).listen(3000)
    })
}

//createSillyServer()
createHTMLServer()