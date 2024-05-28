let color = "black";

//DOMContentLoaded waits for HTML and CSS to load first before executiion
document.addEventListener("DOMContentLoaded", function(){

    createBoard(16)
    //create a board with 16x16, unless user input a number
    let btn_popup = document.querySelector("#popup");
    btn_popu.addEventListener("click"), function(){
        let size = getSize();
        createBoard(size);
    }
})

function createBoard(size){
    let board = document.querySelector(".board")
    
    //forming of 16x16 board
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // creating number of divs required
    let numDivs = size * size;
    for(let i = 0; i < numDivs; i++){
        //addEventListener so that color of square changes when mouse hovers
        div.addEventListener("mouseover", colorDiv);
        board.insertAdjacentElement("beforeend", div)
    }
}

//get user input
function getSize(){
    let input = prompt("Give me a number")
    let message = document.querySelector("#message");
    if(input == ""){
        message.innerHTML = "Please provide a number";
    }
    else if(input < 0 || input > 100){
        message.innerHTML = "Provide a number between 1 and 100";
    }
    else{
        message.innerHTML = "Now you play!";
        return input;
    }
}

//for random color option
function colorDiv(){
    if (color == "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    }
    else{
        this.style.backgroundColor = 'black';
    }
}

function setColor(colorChoice){
    color = colorChoice;
}

function resetBoard(){
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white")
}