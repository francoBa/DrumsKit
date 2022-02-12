/* 
// calling a function as argument - Calculator example
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}

calculator(4, 5, add);
// returns 9
*/

const $d = document,
    $buttons = $d.querySelectorAll('.drum');

for (i=0; i<$buttons.length; i++) {
    $buttons[i].addEventListener('click', handleDrumClick);
    $buttons[i].classList.remove('white');
}

function handleDrumClick() {
    findLetterSound(this.textContent);
}

$d.addEventListener('keydown', pressKey);

function pressKey(e) {
    findLetterSound(e.key);
}

function findLetterSound(letter) {
    for (i=0; i<$buttons.length; i++) {
        $buttons[i].classList.remove('white');
    }
    let instrument = "";
    switch (letter) {
        case "w":
            instrument = 'tom-1.mp3';
            break;
        case "a":
            instrument = 'tom-2.mp3';
            break;
        case "s":
            instrument = 'tom-3.mp3';
            break;
        case "d":
            instrument = 'tom-4.mp3';
            break;
        case "j":
            instrument = 'snare.mp3';
            break;
        case "k":
            instrument = 'crash.mp3';
            break;
        case "l":
            instrument = 'kick-bass.mp3';
            break;
        default:
            // console.log(letter);
    }
    if (instrument !== "") {
        $d.querySelector('.' + letter).classList.toggle('white');
        const audio = new Audio('./sounds/' + instrument);
        audio.play();
    }
}