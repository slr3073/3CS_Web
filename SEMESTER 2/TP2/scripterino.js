$(document).ready(function () {

    $('.supprimer').click(function () {
        $(this).parents('tr').remove()
        alert('Date supprimée !')
    })

    $('#formAjout').submit(function (event) {
        event.preventDefault()

        let ville = $('#ville').val()
        let dep = $('#dep').val()
        let lieu = $('#lieu').val()
        let date = $('#date').val()
        let heure = $('#heure').val()

        $('#tabDates').append("<tr>" +
            "<td>" + ville + "</td>" +
            "<td>" + dep + "</td>" +
            "<td>" + lieu + "</td>" +
            "<td>" + date + "</td>" +
            "<td>" + heure + "</td>" +
            "<td><a href='#' class='supprimer'>supprimer</a></td>" +
            "</tr>")

        $('.supprimer:last').click(function () {
            $(this).parents('tr').remove()
            alert('Date supprimée !')
        })

        $('#formAjout input').val('')
        alert('Date ajoutée avec succès !')
    })


    $('#aide').click(function (event) {
        event.preventDefault()
        window.open($(this).attr('href'), "popupWindow", "menubar=no, status=no, scrollbars=no, menubar=no, width=600, height=400")
    })

})
