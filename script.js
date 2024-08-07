// Reset button on top of page
const resetButton = document.createElement('button');
resetButton.textContent = 'RESET';
resetButton.id = 'rgbBox';
resetButton.style.borderRadius = '10px';
resetButton.style.backgroundColor = 'white'
resetButton.style.fontFamily = 'Helvetica';
resetButton.style.fontWeight = 'bolder';
resetButton.style.fontSize = '24px'
resetButton.style.margin = '10px';
resetButton.style.border = 'none';
resetButton.style.width = '150px';
resetButton.style.height = '50px';
document.body.appendChild(resetButton);
resetButton.addEventListener('click', reset);

// Body into flex
const body = document.body;
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.alignItems = 'center'

// Creating initial divs
const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.height = '750px';
container.style.width = '750px';

for (let i = 0; i < 16; i++){
    const squareRow = document.createElement('div');
    squareRow.style.display = 'flex';
    squareRow.style.flexGrow = '1';
    container.appendChild(squareRow);
    for (let j = 0; j < 16; j++){
        const squareDiv = document.createElement('div');
        squareDiv.id = 'squareDiv'
        squareDiv.style.flexGrow = '1';
        squareDiv.style.border = '1px solid black';
        squareDiv.style.backgroundColor = 'white';
        squareRow.appendChild(squareDiv);
        squareDiv.addEventListener('mouseenter', lightUp);
        let r = Math.random() * 255;
        let g = Math.random() * 255;
        let b = Math.random() * 255;
        function lightUp(){
            squareDiv.style.backgroundColor = `rgb(${r},${g},${b})`;
        }
    }
}

// Creating divs after reset
function reset(){
    const oldContainer = document.getElementById('container');
    oldContainer.textContent = '';

    let userSquares = prompt('Enter a number between 1-100:');
    if (userSquares <= 100 && userSquares >= 1 && userSquares != NaN){
        for (let i = 0; i < userSquares; i++){
            const squareRow = document.createElement('div');
            squareRow.style.display = 'flex';
            squareRow.style.flexGrow = '1';
            container.appendChild(squareRow);
            for (let j = 0; j < userSquares; j++){
                const squareDiv = document.createElement('div');
                squareDiv.style.flexGrow = '1';
                squareDiv.style.border = '1px solid black';
                squareDiv.style.backgroundColor = 'white';
                squareRow.appendChild(squareDiv);
                squareDiv.addEventListener('mouseover', lightUp);
                let r = Math.random() * 255;
                let g = Math.random() * 255;
                let b = Math.random() * 255;
                function lightUp(){
                squareDiv.style.backgroundColor = `rgb(${r},${g},${b})`;
                }
            }
        }
    } else {
        alert('Invalid number, please try again!')
    }
}


// RGB
function rgbColor(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`;
}

let r = 255;
let g = 0;
let b = 0;

let phase = 0;

function changeColor() {
    if (phase === 0) {
        g += 5;
        if (g >= 255) {
            g = 255;
            phase = 1;
        }
    } else if (phase === 1) {
        r -= 5;
        if (r <= 0) {
            r = 0;
            phase = 2;
        }
    } else if (phase === 2) {
        b += 5;
        if (b >= 255) {
            b = 255;
            phase = 3;
        }
    } else if (phase === 3) {
        g -= 5;
        if (g <= 0) {
            g = 0;
            phase = 4;
        }
    } else if (phase === 4) {
        r += 5;
        if (r >= 255) {
            r = 255;
            phase = 5;
        }
    } else if (phase === 5) {
        b -= 5;
        if (b <= 0) {
            b = 0;
            phase = 0;
        }
    }

    document.getElementById('rgbBox').style.backgroundColor = rgbColor(r, g, b);
}

setInterval(changeColor, 100);