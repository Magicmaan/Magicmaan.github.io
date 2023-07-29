

//function sayhi() {
//    console.log("I hate this language");
//    
//    var imageContainer = document.getElementById("page-body");
//
//
//    for (let i = 1; i <= 10; i++) {
//        elem = document.createElement("img");
//        elem.src = './images/portfolio/Portal/icon' + i + '.png';
//
//
 //       elem.style.width = "200px";
//        elem.style.height = "auto";
//        imageContainer.appendChild(elem);
//
//        elem.addEventListener('error', function handleError() {
//            imageContainer.removeChild(this);
//        });
//
//        
//    }
//}

function GridSizing1() {
    var portContainer = document.getElementById("portfolio-container");
    var gridContainer1 = document.getElementById("grid-container1");
    var screenWidth = portContainer.offsetWidth; // Use innerWidth instead of screen.width

    var desiredSize = screenWidth / 8;

    
    var numTiles = Math.floor(screenWidth / desiredSize);
    numtiles =- 1;

  
    // Update the grid-template-columns property of the .portfolio-grid class
    
    gridContainer1.style.gridTemplateColumns = `repeat(${numTiles}, ${desiredSize}px)`; // Set the column width to desiredSize
  
    // Set the width of each image inside the gridContainer to desiredSize
    var images = gridContainer1.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
      images[i].style.width = desiredSize + "px";
      images[i].style.height = "auto"; // This will maintain the aspect ratio of the images
    }
  }

  function GridSizing2() {
    var portContainer = document.getElementById("portfolio-container");
    var gridContainer2 = document.getElementById("grid-container2");
    var screenWidth = portContainer.offsetWidth; // Use innerWidth instead of screen.width

    var desiredSize = screenWidth / 4;

    
    var numTiles = Math.floor(screenWidth / desiredSize);
    numtiles =- 1;

  
    // Update the grid-template-columns property of the .portfolio-grid class
    
    gridContainer2.style.gridTemplateColumns = `repeat(${numTiles}, ${desiredSize}px)`; // Set the column width to desiredSize
  
    // Set the width of each image inside the gridContainer to desiredSize
    var images = gridContainer2.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
      images[i].style.height = desiredSize + "px";
      images[i].style.width = "auto"; // This will maintain the aspect ratio of the images
    }
  }
  
  GridSizing1(); // Call it initially to set the grid layout on page load
  GridSizing2(); // Call it initially to set the grid layout on page load
  // Call GridSizing() initially and on window resize
  window.addEventListener("resize", GridSizing1);
  window.addEventListener("resize", GridSizing2);

  
