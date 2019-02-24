const gridContainer = document.querySelector('.grid-container');
const gridBox = document.createElement('div');

let defaultSize = 64;
let screenWidth =  gridContainer.offsetWidth;
let screenHeight = gridContainer.offsetHeight;
let gridBoxCount = Math.floor((screenWidth * screenHeight) / (defaultSize * defaultSize));

for (let i = 0; i < gridBoxCount; i++) {
    const gridBox = document.createElement('div');
    gridBox.classList.add('grid');
    gridBox.style.width = defaultSize + 'px';
    gridBox.style.height = defaultSize + 'px';
    gridContainer.appendChild(gridBox);
}

console.log(screenHeight);
