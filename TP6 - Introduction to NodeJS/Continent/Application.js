const fs = require('fs')
const figlet = require('figlet')
const table = require('table')

function ShowContinentsStats() {
    try {
        var continents = fs.readFileSync('continents.json', 'utf8');
    } catch (err) {
        console.error(err)
    }

    continents = JSON.parse(continents)

    console.log("Les continents sont :")
    for (const continent of continents)
        console.log("- " + continent.nom)

    let population = 0;
    for (const continent of continents)
        population += continent.population
    console.log("La population mondiale est de " + population + " MHabs");

}

function ShowDemographics() {
    figlet('Demographie', function (error, ASCIart) {
        if (error) {
            console.log("Couldn't load figlet")
            return
        }
        console.log(ASCIart)

        try {
            const data = fs.readFileSync('demographics.json', 'utf8')
            console.log(table.table(JSON.parse(data)))
        } catch (error) {
            console.log("Couldn't read file")
        }

    })
}

//ShowContinentsStats()
ShowDemographics()



