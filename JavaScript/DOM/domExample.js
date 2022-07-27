window.onload = addEventListeners(false);

function addEventListeners(capturePhase) {
    let bodyElement = document.querySelector('body');
    bodyElement.addEventListener('click', () => {
        console.log('click event listener on body element');
    }, capturePhase);

    let divElement = document.querySelector('div');
    divElement.addEventListener('click', () => {
        console.log('click event listener on the div element');
    }, capturePhase);

    let firstParagraphElement = document.querySelector('#firstParagraph');
    firstParagraphElement.addEventListener('click', (event) => {
        console.log('click event listener on paragraph element');
        event.cancelBubble = true;
    }, true);
    firstParagraphElement.addEventListener('click', () => {
        console.log('second click event listener on paragraph element');
    }, capturePhase)
}

console.log(hoistedVariable);
var hoistedVariable = 'the engine will hoist this variable so we can refer to it before its declaration';

console.log(nonHoistedVariable);
let nonHoistedVariable = 'this variable is not hoisted';
