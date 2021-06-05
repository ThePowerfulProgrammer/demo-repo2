// alert that changes content
const myAlert = document.getElementById('window_alert');
myAlert.addEventListener('click', UpdateName);

function UpdateName() {
    let name = prompt("Enter name: ");
    myAlert.textContent = 'Player 1: ' + name;
}

// Parse data from a JSON array

myArray = [
    {'type': 'fire', 'pokemon': 'Charizard', 'level': 67},
    {'type': 'water', 'pokemon': 'Blastoise', 'level': 90},
    {'type': 'grass', 'pokemon': 'Venesaur', 'level': 53}
]

function parseArray(Array) {
    var myData = document.getElementById("pokemonTypes");

    for (var i = 0; i < Array.length; i++) {
        var listItem = `
        <li>Type: ${Array[i].type}</li>
        <li>Name: ${Array[i].pokemon}</li>
        <li>Level: ${Array[i].level}</li>
        `

        myData.innerHTML += listItem
    }
}

parseArray(myArray);

// Display hidden data

function RevealMessage() {
    document.getElementById('Reveal').style.display = "block";
    document.getElementById('revealButton').style.marginTop = '2em';
}

// add data/html to existing tag
const para = document.getElementById('addedData')
para.innerHTML += ".......This Was Added Dynamically With JS";

// conditional 
let Price = 12.50;
let totalPay = Price;

if (Price < 13.00) {
    totalPay = Price + (Price * .75);
} else {
    totalPay = Price;
}

document.getElementById('Payment').innerHTML += totalPay;

// else if 
const select = document.querySelector('select');
const paragraph = document.getElementById('pokemonSelector');

select.addEventListener('change', setPokemon);

function setPokemon() {
    const choice = select.value;

    if (choice === 'fire') {
        paragraph.textContent = 'Basic bitch.';
      } else if (choice === 'water') {
        paragraph.textContent = 'just drown.';
      } else if (choice === 'grass') {
        paragraph.textContent = 'Not special, just stupid.';
      } else {
        para.textContent = '';
      }
}

// create window alert

document.getElementById('alert').onclick = function() {
    alert("You clicked the button");
}



// image changer
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/img-01.jpg') {
      myImage.setAttribute('src','images/img-02.jpg');
    } else {
      myImage.setAttribute('src','images/img-01.jpg');
    }
}

