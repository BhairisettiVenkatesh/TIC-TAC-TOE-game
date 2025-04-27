let reset = document.querySelector('#reset-btn');
let boxes = document.querySelectorAll('.box');
let turn = true;
const winPatterns = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7],
    [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turn) {
            box.innerHTML = 'X';
            turn = false;
        } else {
            box.innerHTML = 'O';
            turn = true;
        }
        box.disabled = true; // disabling after one choice
        checkWinner();
    });
});

let checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerHTML;
        let pos2 = boxes[pattern[1]].innerHTML;
        let pos3 = boxes[pattern[2]].innerHTML;

        if (pos1 != '' && pos2 != '' && pos3 != '') {
            if (pos1 === pos2 && pos2 === pos3) {
                document.querySelector('#rbar').innerHTML = 'Congratulations! Player ' + pos1 + ' wins!';
                disableAllBoxes();
                return; // Exit the function early since we have a winner
            }
        }
    }
};

let disableAllBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

let enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerHTML = ''; // Clear the box content
    });
};

let resetGame = () => {
    turn = true;
    document.querySelector('#rbar').innerHTML = '';
    enableBoxes();
};

reset.addEventListener('click', resetGame);
