# Etch - A - Sketch - JS

A simple JS project that allows a user to draw over a screen.

The objective of this project is to utilize DOM manipulation skills.


[Visit The Odin Project Tutorial](https://www.theodinproject.com/lessons/etch-a-sketch-project)

## Documentation
The project took me a total of: **9 Hours** to complete.

### HTML Overview
Here we've got 2 sections.
1. We have a `<Header>` section that contains the Page title and a short description about it.
2. We have a `.shell` section. This acts as a physical device shell that houses a game. It houses 3 children.

  a. `'.left-controls'` : This houses controls available to the user on the left hand side of the page. Has 1 option:  
    - `'#pixel-selector'`. This is a `<input>` element of the type: `'range'` that allows a user to generate a grid with different sizes.

  b. `'.screen'` : This `<div>` contains the actual screen of the page. It has two (2) children.
    - `'.grid-container'` that houses the grid when generated. and  
    - `.logo` div that acts as the maker of the game.

  c. `'.right-controls'` : This sub-section holds controls available to the user on the right hand side of the page. It has two (2) children.
    - `'#screen-eraser'` - As it's name, this option allows a user to clear the screen. and  
    - `'#color-picker'` which allows the user to draw with more colors at random.

The page also loads 2 Google Fonts.

  i. `Archivo Black` for Headings & the Logo.

  ii. `Space Mono` for Body text


### CSS Overview
We have arranged the styling based on the unique sections of the `index.html` file.

- The `<input>` range element has unique properties that override the default styling. It has a unique value selector and also is rotated 90deg to appear vertical to the user.

- The `<input>` checkbox element also has unique CSS rules that override the default layout to make it appear as a toggle button.

- The `<div>` element of the class '.grid-container' also uses flexbox to generate the grid.



### JS Overview
In the JavaScript, we are globally storing a reference to:  
1. Several colours in an Array object
2. `<input>` element for the 'pixel-selector' option
3. `<input>` element of type 'checkbox' for the 'multi-colors' option
4. `<button>` element for the 'screen-eraser' option
5. `<div>` element of the class '.grid-container' that will house the grid.
6. `eventFire` boolean variable to be evaluated when specific events are fired.
7. `defaultSize` numeric variable that is used to specify how big the grid `<div>`s will be.
8. `divsArray` Array object that is used to store the grid `<div>`s.


We have five (5) functions in the code:
  - `createGrid ( gridSize )`,
  - `removeGrid ()`,
  - `getScreenPixelSize()`,
  - `clearScreen()` and the
  - `getAllDivs()`.

Once the script is executed, the `.createGrid()` is loaded. And the `.getScreenPixelSize()` function is passed as it's argument.  

Also, we have several event handlers to monitor user changes on the 'Pixel Selector', the 'Eraser Button' and the 'Multi-Colours' toggle.


#### How the getScreenPixelSize () works
When this function is run, it evaluates the eventFire variable.
If it is still false, then it sets a default grid size of 16 and returns the value.
Else, it picks the value from the '#pixel-selector' and displays it to the user and returns the value.


#### How the createGrid ( gridSize ) works
For this function to run, it needs a numeric value of the size the grid should be generated.

It then calculates the number of grid squares needed and then uses a `for()`loop to generate the squares and add it to the '.grid-container' `<div>` element.


#### How the getAllDivs () works
This function saves all generates grid squares and returns them as an array object.


#### How the removeGrid () works
This function first saves all grid squares by calling the getAllDivs() function. Then loops over the array and removes each one from the parentNode.

#### How the clearScreen () works
This function gets all grid squares by calling the getAllDivs() function. Then it loops over the array and resets the background colour of each `<div>`.
