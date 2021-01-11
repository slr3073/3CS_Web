$(document).ready(function () {
    let choices = ['air', 'fire', 'paper', 'rock', 'scissors', 'sponge', 'water']

    for (const choice of choices)
        $("#buttons").append(`<button>${choice}</button>`)

    $('button').click(function () {
        let playerChoice = $(this).text()
        $("#player img").attr('src', `Images/${playerChoice}.png`)

        let randomIndex = Math.floor(Math.random() * choices.length)
        let cpuChoice = choices[randomIndex]
        $("#cpu img").attr('src', `Images/${cpuChoice}.png`)

        $.ajax({
            method: 'get',
            url: 'fight',
            dataType: 'json',
            data: {playerChoice: playerChoice, cpuChoice: cpuChoice},
            success: function (data) {
                switch (data.outcome) {
                    case 1:
                        $('#result h2').text("Player wins")
                        $('#result p').text(data.message)
                        break;
                    case -1:
                        $('#result h2').text("CPU wins")
                        $('#result p').text(data.message)
                        break;
                    case 0:
                        $('#result h2').text("Draw")
                        $('#result p').text("")
                }
            },
            error: function () {
                console.log("An error has occured")
            }
        })
    })

})

