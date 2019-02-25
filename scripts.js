const pixelSelector = document.getElementById('pixel-selector');
const gridContainer = document.querySelector('.grid-container');
const eraserButton = document.querySelector('#screen-eraser');
const multiColorsCheck = document.querySelector('#color-picker');
const MULTI_COLOURS = [
  'hsl(180, 100%, 25%)',
  'hsl(243, 100%, 13%)',
  'hsl(134, 90%, 50%)',
  'hsl(46, 100%, 50%)',
  'hsl(343, 100%, 43%)',
];


let eventFire = false;
let defaultSize;
let divsArray;
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
  divsArray = getAllDivs();
  for (let div of divsArray) {
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

function clearScreen() {
  divsArray = getAllDivs();
  for (let div of divsArray) {
    div.style.backgroundColor = '';
  }
}

function getAllDivs() {
  const divs = document.getElementsByClassName('grid');
  return Array.from(divs);
}

pixelSelector.addEventListener('change', () => {
  eventFire = true;
  defaultSize = getScreenPixelSize();
  console.log('event fired. New pixel size: ', defaultSize, eventFire);
  removeGrid();
  createGrid(defaultSize);
});

gridContainer.addEventListener('mousemove', event => {
 if (eventFire == true) {
    let colorChoice = Math.floor(Math.random() * 5);
    event.target.style.backgroundColor = `${MULTI_COLOURS[colorChoice]}`;
 }
else {
    event.target.style.backgroundColor = `${MULTI_COLOURS[0]}`;
  }
});

eraserButton.addEventListener('click', clearScreen);

multiColorsCheck.addEventListener('change',(event) => {
  if (event.target.checked) {
    eventFire = true;
  }
  else {
    eventFire = false;
  }
});


createGrid(getScreenPixelSize());
