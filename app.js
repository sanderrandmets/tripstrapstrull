let gameBoard = [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
]

const cellDivs = document.querySelectorAll('.cell')
const messageDiv = document.getElementById('message')

cellDivs.forEach(el => {
    el.addEventListener('click', event => {
        const selectedCell = event.currentTarget
        const selectedRow = selectedCell.dataset.row
        const selectedCol = selectedCell.dataset.col

        if (gameBoard[selectedRow][selectedCol] == '-') {
            selectedCell.innerText = 'X'
            gameBoard[selectedRow][selectedCol] = 'X'
            if (isGameOver()) {
                messageDiv.inneText = 'Mäng läbi!'
            } else {
                computerMove()
            }
        }

    })
});
function computerMove() {
    emptyCell = getEmptyCell()
    cellDiv = document.getElementById(emptyCell[0] + '' + emptyCell[1])
    cellDiv.innerText = 'O'
    gameBoard[emptyCell[0]][emptyCell[1]] = 'O'

    if (isGameOver()) {
        messageDiv.inneText = 'Mäng läbi!'
    }
}

function getEmptyCell() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (gameBoard[i][j] == '-') {
                return [i, j]
            }
        }
    }

    function isGameOver() {
        if (getEmptyCell() == undefined) {
            return true
        }
    }

    gameBoard.forEach(row => {
        row.foeEach((cell, j) => {
            if (cell == '-') {
                return [i, j]
            }
        })
    })
}

function isGameOver() {
    isOver = false
    for (let i = 0; i < 3; i++) {
        if (gameBoard[i][0] == gameBoard[i][1] && gameBoard[i][1] == gameBoard[i][2] && gameBoard[i][0] != '-') {
            return true
        }
        if (gameBoard[0][i] == gameBoard[1][i] && gameBoard[1][i] == gameBoard[2][i] && gameBoard[0][i] != '-') {
            return true
        }
    }
    if (gameBoard[0][0] == gameBoard[1][1] && gameBoard[1][1] == gameBoard[2][2] && gameBoard[0][0])
        return true
    if (gameBoard[0][2] == gameBoard[1][1] && gameBoard[1][1] == gameBoard[2][0] && gameBoard[0][2] != '-') {
        return true
    }
    return false
}
