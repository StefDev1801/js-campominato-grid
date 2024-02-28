console.log('ou');

// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Crea bottone (in HTML?)
// Mettigli un addeventlistener così che generi una griglia

const gridCell = `<div class="grid_element100"></div>`

const grid = document.querySelector('.grid');

console.log(grid, gridCell);

const numberGridCell100 = 100;

//crea una funzione da richiamare che ti generi la griglia desiderata (i valori saranno utili se arriverò al bonus)
// prova a farla con div, se non sei in grado con list come su fizzbuzz con ogni cella ha un numero progressivo, da 1 a 100.
/**
 * 
 * @param {number} numberGridCell - How many cell in a grid
 */
function createGrid(numberGridCell) {
    for (let i = 0; i < numberGridCell; i++) {
    // const element = array[i];
    grid.insertAdjacentHTML('beforeend', gridCell)
}
}
let button = document.querySelector('.btn')
button = addEventListener('click', function () {
    createGrid(numberGridCell100)
})

// fai che ogni cella sia cliccabile

// quando clicchi su una cella: fai si che ti dia il display.log con il numero dell'indice corrispettivo

// posiziona la griglia in mezzo allo schermo e non far scomparire il bottone

// aggiungi poi una classe css o direttamente con js bgcolor azzurro