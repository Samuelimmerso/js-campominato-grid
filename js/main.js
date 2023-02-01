// Declaration
const generate = document.querySelector("#gridgen");                         //button to create the grid
const container_bottom = document.querySelector(".container_bottom");       //bottom part of container


generate.addEventListener("click",
    function () {
        container_bottom.classList.toggle("d-none");

        if (!container_bottom.classList.contains("d-none")) {
            generateGrid();
        } else {
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
    const gridEl = document.querySelector(".grid");  //grid element
    for (let i = 0; i < 100; i++) {
        gridEl.innerHTML += `<div class="square"></div>`;
    }
}

function resetGrid() {
    const gridEl = document.querySelector(".grid");  //grid element
    grid.innerHTML = ``;
}