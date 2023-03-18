document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");
    let resetButton = document.getElementById("reset-button");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

    resetButton.addEventListener('click', resetSquares);
})

function handleClick(event) {
    let square = event.target;
    let postion = square.id;

    if (handleMove(postion)) {
        let currentPlayer = playerTime === 0 ? "Dona Amália" : "Dona Florinda";
        setTimeout(() => {
            alert(" O Jogo Acabou - O Vencedor foi " + currentPlayer);
        }, 30);
    }
    updateSquare(postion);
}

function updateSquare(postion) {
    let square = document.getElementById(postion.toString());
    let symbol = board[postion];
    square.innerHTML = `<div class='${symbol}'></div>`
}

