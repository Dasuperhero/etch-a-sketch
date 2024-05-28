// hover effect so divs change color when mouse pass over them


//button at top of screen that sends user a popup asking for number of squares per side for the new grid
//existing grid removed, new grid generated in the same total space
let number = 16;
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    number = parseInt(prompt("How many squares per side? (Maximum 100)"));
    if (number > 100){
        number = 100;
    }
})

const container = document.querySelector("#container")
function generategrid(number){
    for(i = 0; i < number; i++){
        for(j=0; j<number; j++){
            const content = document.createElement("div");
            container.appendChild(content);
        }
    }
}

