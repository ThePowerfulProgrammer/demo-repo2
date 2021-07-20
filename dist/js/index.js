document.getElementById("Test").innerText += " Hi";


myArray = [
    {'type': 'fire', 'pokemon': 'Charizard', 'level': 67},
    {'type': 'water', 'pokemon': 'Blastoise', 'level': 90},
    {'type': 'grass', 'pokemon': 'Venesaur', 'level': 53}
]

function parseArray(Array) {
    var myData = document.getElementById("pokemonTypes");

    for (var i = 0; i < Array.length; i++) {
        var listItem = `
        <li class="list-item">Type: ${Array[i].type}</li>
        <li class="list-item">Name: ${Array[i].pokemon}</li>
        <li class="list-item">Level: ${Array[i].level}</li>
        `

        myData.innerHTML += listItem
    }
}

parseArray(myArray);