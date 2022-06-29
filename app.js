const container = document.querySelector('.container');
const grid = document.querySelector('.grid');

for (i = 1; i < 257; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.textContent = i;
    container.appendChild(grid);
}

container.addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = 'blue';
});