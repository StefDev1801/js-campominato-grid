# Instructions
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

<!-- Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
 -->
Consigli del giorno: 
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.

## Pseudocode
Crea bottone (in HTML?)
Mettigli un addeventlistener così che generi una griglia
posiziona la griglia in mezzo allo schermo e non far scomparire il bottone
prova a farla con div, se non sei in grado con list come su fizzbuzz con ogni cella ha un numero progressivo, da 1 a 100.
fai che ogni cella sia cliccabile
quando clicchi su una cella: fai si che ti dia il display.log con il numero dell'indice corrispettivo
aggiungi poi una classe css o direttamente con js bgcolor azzurro

### Tools
- const/let
- classlist.add()
- markup with template literal
- for
- addeventlistener(click,)
- log

# Instructions CAMPO MAGICO

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: i funghi magici.



Attenzione: nella stessa cella può essere posizionato al massimo un fungo, perciò nell’array dei funghi non potranno esserci due numeri uguali.




In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati
- abbiamo calpestato una fungo
- la cella si colora di rosso e la partita termina.
Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una fungo o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono funghi).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una fungo.

<!-- BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; -->

## Steps
- 1 genera 16 funghi magici in 16 caselle differenti
- 2 se clicco una casella scopro cosa è:
    - se è un fungo (ed è presente quindi nella lista dei numeri generati) ho perso, la cella si colora di rosso e termina la partita
    - sennò resta il colore azzurro che aveva già
- 3 qunando seleziono tutte le caselle che non sono funghi ho vinto 
- 4 sia se vinco che se perdo dico quante volte non ho cliccato un fungo

- 1 array con funghi che devo sovrascrivere sull griglia
- l'event listener IF legendo dentro le caselle un fungo allora fa partire 2 funzioni: youLost, youScore.
ELSE aumenta una variabile score, controlla se la variabile score è uguale a numberGridCell-16 che sarebebbe il numero di caselle che devo beccare e se è uguale fa partire 2 funzioni: youWin, youScore.