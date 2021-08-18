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
        <li class="list-item">Type: ${Array[i].type}</li>
        <li class="list-item">Name: ${Array[i].pokemon}</li>
        <li class="list-item">Level: ${Array[i].level}</li>
        <li class="list-item">---</li>
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
        paragraph.textContent = '';
      }
}

// create window alert

document.getElementById('alert').onclick = function() {
    alert("You clicked the button");
}


// image container
let container = document.getElementById("Image_container");



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



// Create a limit counter
var button = document.getElementById("counter");
count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Counter: " + count;
  if (count > 1) {
    count = 1;
    button.innerHTML = "Counter: " + count;
  }
}


//back to top btn
var btt = document.getElementById('back-to-top'),
    body = document.body,
    docElem = document.documentElement,
    offset = 100,
    scrollPos, docHeight
    isFirefox = navigator.userAgent.toLowerCase().indexOf( "firefox" ) > -1;

docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
if (docHeight != 'undefined') {
  offset = docHeight / 4;
}

window.addEventListener('scroll', function( event ) {
  scrollPos = body.scrollTop || docElem.scrollTop;

  btt.className = ( scrollPos > offset ) ? "visible" : "";
});

btt.addEventListener("click", function( event ){
  event.preventDefault;

  if (isFirefox) {
    docElem.scrollTop = 0; 
  }
  else {
    body.scrollTop = 0;
  }
})

// auto complete box
var targetInput = document.getElementById('country'),
    results = document.getElementById('autocomplete-results'),
    countryList = ['Albania', 'Colombia', 'Cuba', 'El Salvador', 'Jordan', 'Kenya', 'Nepal', 'Romania', 'Sri Lanka', 'Wales'],
    matches = [],
    resultsCursor = 0;

// Focus the input
targetInput.focus();

// Add event listener for the input keydown
targetInput.addEventListener('keydown', function(event) {
    if (event.keyCode == '13') {
        event.preventDefault();
    }
});

// Add event listener for the input keyup
targetInput.addEventListener('keyup', function(event) {
    /*
    * Key codes
    *
    * Enter: 13
    * Arrow up: 38
    * Arrow down: 40
    */

    results.innerHTML = '';
    toggleResults('hide');

    if (this.value.length > 0) {
        matches = getMatches(this.value);

        if (matches.length > 0) {
            displayMatches(matches);
        }
    }

    if (results.classList.contains('visible')) {
        switch(event.keyCode) {
            case 13:
                targetInput.value = results.children[resultsCursor].innerHTML;
                toggleResults('hide');
                resultsCursor = 0;

                break;
            case 38:
                if (resultsCursor > 0) {
                    resultsCursor--;

                    moveCursor(resultsCursor);
                }

                break;
            case 40:
                if (resultsCursor < (matches.length - 1)) {
                    resultsCursor++;

                    moveCursor(resultsCursor);
                }

                break;
        }
    }
});

// Define a function for checking if the input value matches any of the country names
function getMatches(inputText) {
    var matchList = [];

    for (var i = 0; i < countryList.length; i++) {
        if (countryList[i].toLowerCase().indexOf(inputText.toLowerCase()) != -1) {
            matchList.push(countryList[i]);
        }
    }

    return matchList;
}

// Define a function for displaying autocomplete results
function displayMatches(matchList) {
    var j = 0;

    while (j < matchList.length) {
        results.innerHTML += '<li class="result">' + matchList[j] + '</li>';
        j++;
    }

    // The first child gets a class of "highlighted"
    moveCursor(resultsCursor);

    // Show the results
    toggleResults('show');
}

// Define a function for moving the cursor in the results list
function moveCursor(pos) {
    for (var x = 0; x < results.children.length; x++) {
        results.children[x].classList.remove('highlighted');
    }

    results.children[pos].classList.add('highlighted');
}

// Define a function for toggling the results list
function toggleResults(action) {
    if (action == 'show') {
        results.classList.add('visible');
    } else if (action == 'hide') {
        results.classList.remove('visible');
    }
}


// display dates
new_date = Date();

data_p = document.getElementById("date");
data_p.innerHTML += new_date;




function hello() {
    const name = 'Ash'
    alert(`Hello World ${name}`)


};




























