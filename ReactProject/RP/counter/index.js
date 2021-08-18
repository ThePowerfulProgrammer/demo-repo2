function styleBody() {
    document.querySelector('body').style.backgroundColor = 'Azure';
}

function addText() {
    document.getElementById('hero').innerHTML += " display";
}

function reSize() {
    document.getElementById('box-1').style.fontSize = '1.5rem';
}

function changeColor() {
    const hero = document.getElementById('hero');
    if (hero.style.color === 'black') {
        hero.style.color = 'red';
    }
    else {
        hero.style.color = 'black';
    }
}

function findMax(array) {
    highest = -Infinity
    for (i=0; i < array.length; i++) {
        if (array[i] > highest) {
            console.log(array[i])
            highest = array[i]
        }
    }
    document.getElementsByClassName('listItem').innerHTML += highest;
}

function showData() {
    let myBlock = document.getElementById('myBlock');
    myBlock.style.display = 'block';


}

function counter() {
    var  num = 10;
    num = num + 1;
    console.log(num);
}

const changeFont = () => {
    document.getElementById('box-1').style.fontFamily = 'Roboto Condensed'; 
    document.getElementById('box-2').style.fontFamily = 'Roboto Condensed'; 
}

const addId = () => {
    let mybanner = document.getElementById('test');
    mybanner.setAttribute('id', 'myBanner');
}

const findDate = () => {
    myDate = document.getElementById('date');
    myDate.innerHTML = Date();
    myDate.style.color = 'black';
    myDate.style.fontSize = '1.5rem';
}


styleBody();
findMax([1,55,68,100]);
reSize();
addText();
addId();                                                                                             