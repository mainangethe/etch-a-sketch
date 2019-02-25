let eventFire = false
let defaultSize;
const pixelSelector = document.getElementById('pixel-selector');
const gridContainer = document.querySelector('.grid-container');

function createGrid(gridSize) {
  const gridBox = document.createElement('div');
  let screenWidth =  gridContainer.offsetWidth;
  let screenHeight = gridContainer.offsetHeight;
  let gridBoxCount = Math.floor((screenWidth * screenHeight) / (gridSize * gridSize));
  for (let i = 0; i < gridBoxCount; i++) {
      const gridBox = document.createElement('div');
      gridBox.classList.add('grid');
      gridBox.style.width = gridSize + 'px';
      gridBox.style.height = gridSize + 'px';
      gridContainer.appendChild(gridBox);
  }
  eventFire = false;
}

function removeGrid() {
  const divs = document.getElementsByClassName('grid');
  let divsArray = Array.from(divs);
  for(let div of divsArray) {
    gridContainer.removeChild(div);
  }
}

function getScreenPixelSize() {
  let pixelSize;
  if (eventFire == false) pixelSize = 16;
  else {
    const pixelContainer = document.querySelector('.pixel-selector-container');
    let pixelOutput = document.getElementById('pixel-output');
    pixelSize = pixelSelector.value;
    pixelOutput.textContent = pixelSize + 'px';
    pixelContainer.appendChild(pixelOutput);
  }
    return pixelSize;
}

pixelSelector.addEventListener('change', () => {
  eventFire = true;
  defaultSize = getScreenPixelSize();
  console.log('event fired. New pixel size: ', defaultSize, eventFire);
  removeGrid();
  createGrid(defaultSize);
});

function createTrail(defaultSize, currentXPosition, currentYPosition) {

}

gridContainer.addEventListener('mousemove', event => {
  event.target.classList.add('trail');
});


createGrid(getScreenPixelSize());
