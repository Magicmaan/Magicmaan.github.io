

function sayhi() {
    console.log("I hate this language");
    
    var imageContainer = document.getElementById("page-body");


    for (let i = 1; i <= 10; i++) {
        elem = document.createElement("img");
        elem.src = './images/portfolio/Portal/icon' + i + '.png';


        elem.style.width = "200px";
        elem.style.height = "auto";
        imageContainer.appendChild(elem);

        elem.addEventListener('error', function handleError() {
            imageContainer.removeChild(this);
        });

        
    }
    


}

document.addEventListener("DOMContentLoaded", sayhi);