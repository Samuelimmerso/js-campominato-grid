// Declaration
const play = document.querySelector("#gridgen");                         //button click to create the grid
const container_bottom = document.querySelector(".container_bottom");       //bottom part of container
const gridEl = document.querySelector(".grid");  //grid element
let gridGenerated = false;



//button click generate the grid or reset it
play.addEventListener("click",
    function () {
        container_bottom.classList.toggle("d-none");
        if (!container_bottom.classList.contains("d-none")) {  //if the grid there aren't 
            generateGrid();                           // generate it
        } else {                                            //else reset
            resetGrid();
        }
    }
);





/*****************************
 *                           *
 *          FUNCTION         *
 *                           *
 *****************************/


function generateGrid() {

    for (let i = 0; i < 100; i++) {

        let squareEl = document.createElement("div");
        squareEl.classList.add("square");

        squareEl.addEventListener("click",
            function () {
                console.log(this.classList);
            }
        );

        gridEl.append(squareEl);
        squareEl.innerHTML = `${i + 1}`;
    }
}

function resetGrid() {
    const gridEl = document.querySelector(".grid");  //grid element
    gridEl.innerHTML = ``;
}

