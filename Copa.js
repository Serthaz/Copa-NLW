function createGame(Player1, Hour, Player2, Player3, hour, Player4) {
    return `
    <li>
    <img src="./Assets/${Player1}-logo.svg" alt="Bandeira da ${Player1}">
    <strong>${Hour}</strong>
    <img src="./Assets/${Player2}-logo.svg" alt="Bandeira do ${Player2}">
</li>

<li>
    <img src="./Assets/${Player3}-logo.svg" alt="Bandeira da ${Player3}">
    <strong>${hour}</strong>
    <img src="./Assets/${Player4}-logo.svg" alt="Bandeira da ${Player4}">
</li>
    `
}
let delay = -0.4
function createCard(date, day, round, games) {
    delay = delay + 0.4
    return `
    <div class="card" id="card">
    <h2>${date}<span>${day}</span></h2>
    <h3>${round}</h3>
    <ul>
       ${games}
    </ul>
</div> 
  `
} 

document.querySelector("#cards").innerHTML = `
        ${createCard("23/11" , "Quarta-Feira" , '1° Rodada' ,  
        createGame("Alemanha", "10:00", "japao" , "Espanha", "13:00", "Costa"),
        )}
        ${createCard(" 27/11" , "Domingo" , '2° Rodada' ,
        createGame("japao", "07:00", "Costa", "Espanha" , "16:00" , "Alemanha"))}
        ${createCard("01/12" , "Quinta-Feira" , '3° Rodada' ,
        createGame("japao", "16:00", "Espanha" , "Costa", "16:00" , "Alemanha"))}
` 
