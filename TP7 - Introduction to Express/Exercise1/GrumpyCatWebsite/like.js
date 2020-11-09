$(document).ready(function () {
    $('img').click(function () {
        let respectsSpan = $('#respects')
        respectsSpan.html(parseInt(respectsSpan.text(), 10) + 1)
    })
})
