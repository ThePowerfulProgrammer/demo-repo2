// Fuction reveal
function RevealMessage() {
    document.getElementById('Reveal').style.display = 'block';

}

// Change data
const myAlert = document.getElementById('user');
myAlert.addEventListener('click', UpdateUser);

function UpdateUser() {
    let name = prompt("Enter your name: ");
    myAlert.textContent = "Welcome " + name
    if (myAlert.textContent === 'null') {
        myAlert.textContent = 'Ashish';
    }
}