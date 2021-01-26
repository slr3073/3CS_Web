let users =
    [
        {name: "Kevin", score: 9, badge: 0, qualities: ["force", "robustesse"]},
        {name: "Blaster", score: 18, badge: 2, qualities: ["courage", "dexterite"]},
        {name: "Nooblivious", score: 1, badge: 1, qualities: ["fuite discrète"]}
    ]

document.write("<table > <tbody>")
for (const user of users) {
    document.write("<tr><td>" + user.name + "</td>")
    document.write("<td>score = " + user.score + "</td>")
    document.write("<td>badge = " + user.badge + "</td><td>")
    for (const quality of user.qualities)
        document.write(quality + ", ")

    document.write("</td></tr>")
}
document.write("</table> </tbody>")