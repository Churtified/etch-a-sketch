const container = document.querySelector('#container');

for (i = 0; i < 256; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);
}
