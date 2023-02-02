// Declaration
const play = document.querySelector("#gridgen");                         //button click to create the grid
const container_bottom = document.querySelector(".container_bottom");       //bottom part of container
let bombPlacement = [];                                                     //bomb placement var
let cellSelectedCounter = 0, bombfind = false;                                        // number of cells selected before game over



//button click generate the grid or reset it
play.addEventListener("click",
    function () {
        const gridEl = document.querySelector(".grid");              //grid element declaration
        const difficulty = document.querySelector("#difficulty");   //difficulty element declaration

        play.innerHTML = "PLAY";

        gridEl.classList.toggle("d-none"); //insert and remove grid visibility
        if (!gridEl.classList.contains("d-none")) {  //if the grid there aren't 
            let rangemax = generateGrid(gridEl, difficulty);                           // generate it
            generateBomb(rangemax);          //bomb generating and placement


            // for (let i = 0; i < 16; i++) {
            //     console.log(bombPlacement[i]);  DEBUG
            // }
        } else {                                            //else reset
            resetGrid(gridEl);
        }
    }
);





/*****************************
 *                           *
 *          FUNCTION         *
 *                           *
 *****************************/


function generateGrid(gridEl, difficulty) {

    cellsNumber = [100, 81, 49];
    cellDivision = ["easy", "normal", "hard"];


    for (let i = 0; i < cellsNumber[difficulty.value - 1]; i++) {

        let squareEl = document.createElement("div");
        squareEl.classList.add(`square`);
        squareEl.classList.add(`${cellDivision[difficulty.value - 1]}`);



        squareEl.addEventListener("click",
            function () {

                //bomb presence control
                for (let i = 0; i < 16; i++) {

                    if (this.value == bombPlacement[i]) {
                        this.classList.add("game_over");
                        bombfind = true;
                        alert(`Hai perso, hai conquistato ${cellSelectedCounter} celle`);
                        play.innerHTML = "RESTART"
                    }

                }

                // se la bomba non è stata trovata
                if (bombfind == false) {
                    this.classList.add("active");
                    cellSelectedCounter += 1;
                }
                bombfind = false;//reset bombfind

                // console.log(this.classList); DEBUG
            }
        );

        gridEl.append(squareEl);
        squareEl.value = `${i + 1}`; // value assign
        squareEl.innerHTML = squareEl.value;   // value in html
    }

    return cellsNumber[difficulty.value - 1];
}


function resetGrid(gridEl) {
    gridEl.innerHTML = ``;
}


function generateBomb(rangemax) {

    for (let i = 0; i < 16; i++) {
        bombPlacement[i] = Math.floor(Math.random() * rangemax) + 1;

        //sostituire dopo con un algoritmo migliore
        for (let j = 0; j < i; j++) {  // if in the precedent index are present a double presence of a number
            if (bombPlacement[i] == bombPlacement[j]) {
                bombPlacement[i] = Math.floor(Math.random() * rangemax) + 1;  //replace it
            }
        }


    }

}


