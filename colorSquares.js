let square = document.getElementsByClassName("square");
let textColor = document.getElementById("textColor");
let youWonText = document.getElementById("score");
let newColorBtn = document.getElementById("new");
let easyBtn = document.getElementById("easy");
let hardBtn = document.getElementById("hard");
let nothing = null;
let mode = 6;
let won = false;



newColorBtn.addEventListener("click", () => {
    startGame(mode);
});



easyBtn.addEventListener("click", () => {
    mode = 3;
    startGame(mode);
});

hardBtn.addEventListener("click", () => {
    mode = 6;
    startGame(mode);
});


function startGame(num){
    let randColor = getRandomNum(num);
    let winColor = getWinColor(randColor);
    youWonText.innerHTML = "Welcome";
   

    function randomColor(){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        // console.log("From randomColor" + "rgb(" + r + ", " + g + ", " + b + ")")
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
    
    function getRandomNum(num){
        let colorArray = [];
        for(let i = 0; i<num; i++){
            let rand = randomColor();
            colorArray.push(rand);
        }
        // console.log("from ColorArray" + colorArray)
        return colorArray;
    }
    
    function getWinColor(arr){
        let randomNumber = Math.floor(arr.length * Math.random());
        textColor.innerHTML = arr[randomNumber];
        // console.log("From getWinColor" + arr[randomNumber]);
        return arr[randomNumber];
    }
    
    function win(winColor){
        for(let i = 0; i < square.length; i++){
            square[i].style.backgroundColor = winColor;
            square[i].style.opacity = 1;
        }
    }
    
    
    // function colorSquare(arr){
    //     if(num == 3){
    //         square[3].style.display = "none";
    //         square[4].style.display = "none";
    //         square[5].style.display = "none";
    //     }
    //     else{
    //         square[3].style.display = "block";
    //         square[4].style.display = "block";
    //         square[5].style.display = "block";
    //     }
    //     for(let i = 0; i < square.length; i++){
    //         square[i].style.backgroundColor = randColor[i];
    //         square[i].style.border = "5px solid black";
    //         let squareColor = square[i].style.backgroundColor;
    //         square[i].addEventListener("click", () => {
               

    //             if(squareColor != winColor){
    //                 console.log("not correct")
    //                 // console.log(squareColor)
    //                 square[i].style.backgroundColor = nothing;

    //             }

    //             else{
    //                 won = true;
    //                 win(winColor);
    //                 youWonText.innerHTML = "You Won!"; 
    //                 console.log("You won")

    //             }
    //         });
    //     }

    // }

    // colorSquare(randColor);

    // console.log(randColor)
    // console.log(winColor)

    function giveSquareColor(arr){
        if(num == 3){
            square[3].style.display = "none";
            square[4].style.display = "none";
            square[5].style.display = "none";
        }
        else{
            square[3].style.display = "block";
            square[4].style.display = "block";
            square[5].style.display = "block";
        }
        for(let i = 0; i < arr.length; i++){
            square[i].style.backgroundColor = randColor[i];
            square[i].addEventListener("click", () =>{
                console.log("hit" + [i]);
                let squareColor = (square[i].style.backgroundColor);
                square[i].style.opacity = 0;
                if(squareColor == winColor){
                    youWonText.innerHTML = "You Won!"; 
                    win(winColor);
                }
                else{
                    youWonText.innerHTML = "Incorrect! Try again!";
                }
            });
        }
    }

    giveSquareColor(square);

  
}





startGame(mode);
