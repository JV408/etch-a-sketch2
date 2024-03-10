document.addEventListener('DOMContentLoaded', function() {

//Create a Board//
const board = document.querySelector('.board');
const size = document.querySelector('.size')

size.addEventListener('click', function() {
    const sizeValue = parseInt(prompt('Select a size'));
    if (sizeValue > 0 && sizeValue <= 100) {
        board.innerHTML = '';
        const squareSize = 500 / sizeValue;
        for (let i = 0; i < sizeValue; i++) {
            for (let j = 0; j < sizeValue; j++) {
                const square = document.createElement('div');
                square.classList.add('square');
                square.style.width = squareSize + 'px'; // Set width of square
                square.style.height = squareSize + 'px'; // Set height of square
                board.appendChild(square);
            }
            board.appendChild(document.createElement('br'));
        }
    }
    else {
        alert('Please enter a number between 1 and 100.')
    }    
})

//Create a function and listener to draw//
const square = document.querySelectorAll('.square');

board.addEventListener('mouseover', function(event) {
    if (event.target.classList.contains('square')) {
        event.target.style.backgroundColor = 'black';
    }
});

//Reset Board to white//
const buttonReset = document.querySelector('.reset');
buttonReset.addEventListener('click', function(){
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = 'white';
    })
});

});