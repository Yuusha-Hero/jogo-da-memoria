var pedra = "url('img/pedra.png')";
var tesoura = "url('img/tesoura.png')";
var papel = "url('img/papel.png')";

var listaCartas = [pedra, pedra, pedra, pedra, papel, papel, papel, papel, tesoura, tesoura, tesoura, tesoura];

var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var c4 = document.getElementById("c4");
var c5 = document.getElementById("c5");
var c6 = document.getElementById("c6");
var c7 = document.getElementById("c7");
var c8 = document.getElementById("c8");
var c9 = document.getElementById("c9");
var c10 = document.getElementById("c10");
var c11 = document.getElementById("c11");
var c12 = document.getElementById("c12");

Embaralhar();

function Embaralhar(){
    deckEmbaralhado = _.shuffle(listaCartas); /* Biblioteca para Embaralhar */
    c1.style.backgroundImage = deckEmbaralhado[0];
    c2.style.backgroundImage = deckEmbaralhado[1];
    c3.style.backgroundImage = deckEmbaralhado[2];
    c4.style.backgroundImage = deckEmbaralhado[3];
    c5.style.backgroundImage = deckEmbaralhado[4];
    c6.style.backgroundImage = deckEmbaralhado[5];
    c7.style.backgroundImage = deckEmbaralhado[6];
    c8.style.backgroundImage = deckEmbaralhado[7];
    c9.style.backgroundImage = deckEmbaralhado[8];
    c10.style.backgroundImage = deckEmbaralhado[9];
    c11.style.backgroundImage = deckEmbaralhado[10];
    c12.style.backgroundImage = deckEmbaralhado[11];
}

function GirarCarta(){

}

/* Criando função CSS para Ativar o Flip da Carta! */
var card = document.querySelector('.cards');
card.addEventListener('click', function() {
    card.classList.toggle('is-flipped');
});