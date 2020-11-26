//region Imports
const http = require('http')
const fs = require('fs')
const dateFormat = require('dateformat')
const table = require('table')
const Table = require('table-builder')
const requestMod = require('request')
//endregion

function createSillyServer() {
    let app = http.createServer(function (request, response) {
        response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'})
        response.write("Ce serveur ne sait rien dire d'autre que cela. oui oui")
        response.end()
    })

    app.listen(3000)
}

function createHTMLServer() {
    fs.readFile('./index.html', function (error, file) {
        if (error) throw err

        http.createServer(function (request, response) {
            response.writeHead(200, {"Content-Type": "text/html"})
            response.write(file)
            response.end()
        }).listen(3000)
    })
}

function createJSONServer() {
    http.createServer(function (request, response) {
        response.writeHead(200, {'Content-Type': 'application/json'})
        response.write(JSON.stringify({
            retCode: 0,
            retClass: "Success",
            message: 'This server can also send JSON data'
        }))
        response.end()
    }).listen(3000)
}

let requestHistory = [["Date & Time", "Request"]]

function createCoffeeServer() {
    http.createServer(function (request, response) {
        switch (request.url) {
            case "/display":
                response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"})
                if (requestHistory.length > 1)
                    response.write(table.table(requestHistory))
                else
                    response.write("No request at the moment ...")
                break

            case "/save":
                response.writeHead(418, {"Content-Type": "text/plain; charset=utf-8"})
                response.write("data saved")
                fs.writeFile('horodate.json', JSON.stringify(requestHistory), function (error) {
                    if (error) throw error
                })
                break

            default:
                if (request.url === "/favicon.ico") break

                response.writeHead(200, {'Content-Type': 'application/json'})

                let jsonObject = {status: 0, message: 'With pleasure ! '}
                if (!request.url.includes("pls"))
                    jsonObject = {status: -1, message: 'And the polite phrase?'}
                response.write(JSON.stringify(jsonObject))

                let date = new Date()
                let stringifiedDate = dateFormat(date, "dd/mm/yy") + " at " + dateFormat(date, "h:MM:ss")
                requestHistory.push([stringifiedDate, request.url])
        }

        response.end()
    }).listen(3000)
}

function createGEOAPIServer(){
    http.createServer(function (request, response) {

        let URLParts = request.url.split('/');
        let lastURLPart = URLParts.pop() || URLParts.pop();
        if(lastURLPart !== 'favicon.ico' && parseInt(lastURLPart,10)){
            requestMod("https://geo.api.gouv.fr/communes?codePostal=" + lastURLPart, function (error, response2, JSONData) {
                if(error) throw error

                response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})

                let headers = { "nom" : "Name", "population": "Population"};
                response.write((new Table({'class': 'some-table'})).setHeaders(headers).setData(JSON.parse(JSONData)).render());
                response.end()
            })
        }
    }).listen(3000)
}

//createSillyServer()
createHTMLServer()
//createJSONServer()
//createCoffeeServer()
//createGEOAPIServer()