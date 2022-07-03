const container = document.querySelector('.container');
let block;
let target;

function promptSize() {
    let num = prompt("Choose a grid size (between 5-64)!", 16);
    if (num >= 5 && num <= 64) {
        makeGrid(num, num);
    }
    else {
        do {
            num = prompt("Invalid grid size, try again - between 5-64")
        }
        while (num < 5 || num > 64);
        makeGrid(num, num);
    }
}

function makeGrid(numRow, numCol) {
    container.style.setProperty('--numRows', numRow);
    container.style.setProperty('--numCols', numCol);
    for (let i = 0; i < numRow; i++) {
        makeBlock(numCol);
    }
}

function makeBlock(numBlock) {
    for (let i = 0; i < numBlock; i++) {
        block = document.createElement('div');
        block.classList.add('block');
        container.appendChild(block);
    }
}

//effect

function trail(target) {
    target.style.backgroundColor = 'black';
}

container.addEventListener("mouseover", function (e) {
    target = e.target;

    if (target.matches("div.block")) {
        trail(target);
    }
});

const reset = document.querySelector('#resetBtn');
reset.addEventListener("click", function() {
    window.location.reload();
});

promptSize();