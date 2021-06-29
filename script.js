var numbeOfSquares = 6;
var colors = [];
var pickedColor;
var colors = generateRandomColors(numbeOfSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init() {
    //mode buttons eventlisteners
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.innerHTML === "Easy" ? numbeOfSquares = 3 : numbeOfSquares = 6;
            reset();
        });
    }

    for (var i = 0; i < squares.length; i++) {
        // squares[i].style.backgroundColor = colors[i];
        //adding click listeners  
        squares[i].addEventListener("click", function() {

            //grab color and check if it is pickedcolor
            var clickedColor = (this.style.backgroundColor);
            if (clickedColor === pickedColor) {
                messageDisplay.innerHTML = "Correct!";
                h1.style.backgroundColor = clickedColor;
                changeColors(clickedColor);
                resetButton.innerHTML = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.innerHTML = "Try Again";
            }
        });
    }

    reset();
}


function reset() {
    //generate alll new colors
    colors = generateRandomColors(numbeOfSquares);
    //pick a new color from array
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.innerHTML = pickedColor;

    resetButton.innerHTML = "New Colors";
    messageDisplay.innerHTML = "";
    //change colors of squaares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}



resetButton.addEventListener("click", function() {
        reset();
        //generate alll new colors
        // colors = generateRandomColors(numbeOfSquares);
        //pick a new color from array
        // pickedColor = pickColor();
        //change color display to match picked color
        // colorDisplay.innerHTML = pickedColor;

        // this.innerHTML = "New Colors";
        // messageDisplay.innerHTML = "";
        //change colors of squaares
        // for (var i = 0; i < squares.length; i++) {
        // squares[i].style.backgroundColor = colors[i];
    })
    // h1.style.backgroundColor = "steelblue";
    // })

// colorDisplay.innerHTML = pickedColor; -> happening inside init which is calling reset
// for (var i = 0; i < squares.length; i++) {
//     squares[i].style.backgroundColor = colors[i];
//     //adding click listeners  
//     squares[i].addEventListener("click", function() {

//         //grab color and check if it is pickedcolor
//         var clickedColor = (this.style.backgroundColor);
//         if (clickedColor === pickedColor) {
//             messageDisplay.innerHTML = "Correct!";
//             h1.style.backgroundColor = clickedColor;
//             changeColors(clickedColor);
//             resetButton.innerHTML = "Play Again?";
//         } else {
//             this.style.backgroundColor = "#232323";
//             messageDisplay.innerHTML = "Try Again";
//         }
//     })
// }

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //generate random colors to array
    for (var i = 0; i < num; i++) {
        //get random color and push into array
        // var res = randomColor();
        // arr[i] = res;
        arr.push(randomColor());
    }
    //return that  array
    return arr;
}

function randomColor() {
    //pick a "red" from 0 to 255
    var red = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 to 255
    var blue = Math.floor(Math.random() * 256);
    //pick a "green" from 0 to 255
    var green = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}


// easyBtn.addEventListener("click", function() {
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numbeOfSquares = 3;
//     colors = generateRandomColors(numbeOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.innerHTML = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// })

// hardBtn.addEventListener("click", function() {
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numbeOfSquares = 6;
//     colors = generateRandomColors(6);
//     pickedColor = pickColor();
//     colorDisplay.innerHTML = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// })