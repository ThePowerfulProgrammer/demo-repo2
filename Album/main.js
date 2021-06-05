function RevealMessage() {
    document.getElementById("Reveal").style.display = "block";
    document.getElementById("Reveal").style.textAlign = "center";
    document.getElementById("Reveal").style.color = "black";

}


var Array = [
    {'name': 'Ash'},
    {'name': 'Stash'},
    {'name': 'Crash'},
];

function BuildArray(data) {
    var myData = document.getElementById("MyArray");

    for (var i = 0; i < data.length; i++) {
        var row = `
            <li>${data[i].name}</li>
        `
        myData.innerHTML += row
    }

}


BuildArray(Array);