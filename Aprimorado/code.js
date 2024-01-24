var pedra = "url('img/pedra.png')";
var tesoura = "url('img/tesoura.png')";
var papel = "url('img/papel.png')";

var listaCartas = [pedra, pedra, pedra, pedra, papel, papel, papel, papel, tesoura, tesoura, tesoura, tesoura];

/* Frente das Cartas */
var f1 = document.getElementById("f1");
var f2 = document.getElementById("f2");
var f3 = document.getElementById("f3");
var f4 = document.getElementById("f4");
var f5 = document.getElementById("f5");
var f6 = document.getElementById("f6");
var f7 = document.getElementById("f7");
var f8 = document.getElementById("f8");
var f9 = document.getElementById("f9");
var f10 = document.getElementById("f10");
var f11 = document.getElementById("f11");
var f12 = document.getElementById("f12");

/* Verso das Cartas */
var v1 = document.getElementById("v1");
var v2 = document.getElementById("v2");
var v3 = document.getElementById("v3");
var v4 = document.getElementById("v4");
var v5 = document.getElementById("v5");
var v6 = document.getElementById("v6");
var v7 = document.getElementById("v7");
var v8 = document.getElementById("v8");
var v9 = document.getElementById("v9");
var v10 = document.getElementById("v10");
var v11 = document.getElementById("v11");
var v12 = document.getElementById("v12");

var verso = "url(img/verso.png)";

var pontos = 0;

Embaralhar();

function Embaralhar(){
    deckEmbaralhado = _.shuffle(listaCartas); /* Biblioteca para Embaralhar */
    v1.style.backgroundImage = deckEmbaralhado[0];
    v2.style.backgroundImage = deckEmbaralhado[1];
    v3.style.backgroundImage = deckEmbaralhado[2];
    v4.style.backgroundImage = deckEmbaralhado[3];
    v5.style.backgroundImage = deckEmbaralhado[4];
    v6.style.backgroundImage = deckEmbaralhado[5];
    v7.style.backgroundImage = deckEmbaralhado[6];
    v8.style.backgroundImage = deckEmbaralhado[7];
    v9.style.backgroundImage = deckEmbaralhado[8];
    v10.style.backgroundImage = deckEmbaralhado[9];
    v11.style.backgroundImage = deckEmbaralhado[10];
    v12.style.backgroundImage = deckEmbaralhado[11];

    f1.style.backgroundImage = verso;
    f2.style.backgroundImage = verso;
    f3.style.backgroundImage = verso;
    f4.style.backgroundImage = verso;
    f5.style.backgroundImage = verso;
    f6.style.backgroundImage = verso;
    f7.style.backgroundImage = verso;
    f8.style.backgroundImage = verso;
    f9.style.backgroundImage = verso;
    f10.style.backgroundImage = verso;
    f11.style.backgroundImage = verso;
    f12.style.backgroundImage = verso;
}

var escolhaUm = "";
var escolhaDois = "";

var quadro1;
var quadro2;


function Virar(){
    escolhaUm = "";
    escolhaDois = "";
    quadro2.click();
    escolhaUm = "";
    escolhaDois = "";
}

function Click1(){
    if (escolhaUm == escolhaDois){
        escolhaUm = v1.style.backgroundImage;
        quadro1 = v1;
    }
    else{
        escolhaDois = v1.style.backgroundImage;
        quadro2 = v1;
        Resultado();
    }
}

function Click2(){
    if (escolhaUm == escolhaDois){
        escolhaUm = v2.style.backgroundImage;
        quadro1 = v2;
    }
    else{
        escolhaDois = v2.style.backgroundImage;
        quadro2 = v2;
        Resultado();
    }
}

function Click3(){
    if (escolhaUm == escolhaDois){
        escolhaUm = v3.style.backgroundImage;
        quadro1 = v3;
    }
    else{
        escolhaDois = v3.style.backgroundImage;
        quadro2 = v3;
        Resultado();
    }
}

function Click4(){
    if (escolhaUm == escolhaDois){
        escolhaUm = v4.style.backgroundImage;
        quadro1 = v4;
    }
    else{
        escolhaDois = v4.style.backgroundImage;
        quadro2 = v4;
        Resultado();
    }
}

function Click5(){
    if (escolhaUm == escolhaDois){
        escolhaUm = v5.style.backgroundImage;
        quadro1 = v5;
    }
    else{
        escolhaDois = v5.style.backgroundImage;
        quadro2 = v5;
        Resultado();
    }
}

function Click6(){
    if (escolhaUm == escolhaDois){
        escolhaUm = v6.style.backgroundImage;
        quadro1 = v6;
    }
    else{
        escolhaDois = v6.style.backgroundImage;
        quadro2 = v6;
        Resultado();
    }
}

function Click7(){
    if (escolhaUm == escolhaDois){
        escolhaUm = v7.style.backgroundImage;
        quadro1 = v7;
    }
    else{
        escolhaDois = v7.style.backgroundImage;
        quadro2 = v7;
        Resultado();
    }
}

function Click8(){
    if (escolhaUm == escolhaDois){
        escolhaUm = v8.style.backgroundImage;
        quadro1 = v8;
    }
    else{
        escolhaDois = v8.style.backgroundImage;
        quadro2 = v8;
        Resultado();
    }
}

function Click9(){
    if (escolhaUm == escolhaDois){
        escolhaUm = v9.style.backgroundImage;
        quadro1 = v9;
    }
    else{
        escolhaDois = v9.style.backgroundImage;
        quadro2 = v9;
        Resultado();
    }
}

function Click10(){
    if (escolhaUm == escolhaDois){
        escolhaUm = v10.style.backgroundImage;
        quadro1 = v10;
    }
    else{
        escolhaDois = v10.style.backgroundImage;
        quadro2 = v10;
        Resultado();
    }
}

function Click11(){
    if (escolhaUm == escolhaDois){
        escolhaUm = v11.style.backgroundImage;
        quadro1 = v11;
    }
    else{
        escolhaDois = v11.style.backgroundImage;
        quadro2 = v11;
        Resultado();
    }
}

function Click12(){
    if (escolhaUm == escolhaDois){
        escolhaUm = v12.style.backgroundImage;
        quadro1 = v12;
    }
    else{
        escolhaDois = v12.style.backgroundImage;
        quadro2 = v12s;
        Resultado();
    }
}

function Resultado(){
    if (escolhaUm != escolhaDois && escolhaUm != "" && escolhaDois != ""){
        escolhaUm = "";
        escolhaDois = "";
        quadro1.click();
        Virar();
    }
    else if (escolhaUm == escolhaDois && escolhaUm != "" && escolhaDois != ""){
        escolhaUm = "";
        escolhaDois = "";
        pontos++;
        document.getElementById("pontos").replaceChildren(pontos);
    }
}

/* Criando função CSS para Ativar o Flip da Carta! */
var card1 = document.getElementById('carta1');
card1.addEventListener('click', function() {
    card1.classList.toggle('is-flipped');
});
var card2 = document.getElementById('carta2');
card2.addEventListener('click', function() {
    card2.classList.toggle('is-flipped');
});
var card3 = document.getElementById('carta3');
card3.addEventListener('click', function() {
    card3.classList.toggle('is-flipped');
});
var card4 = document.getElementById('carta4');
card4.addEventListener('click', function() {
    card4.classList.toggle('is-flipped');
});
var card5 = document.getElementById('carta5');
card5.addEventListener('click', function() {
    card5.classList.toggle('is-flipped');
});
var card6 = document.getElementById('carta6');
card6.addEventListener('click', function() {
    card6.classList.toggle('is-flipped');
});
var card7 = document.getElementById('carta7');
card7.addEventListener('click', function() {
    card7.classList.toggle('is-flipped');
});
var card8 = document.getElementById('carta8');
card8.addEventListener('click', function() {
    card8.classList.toggle('is-flipped');
});
var card9 = document.getElementById('carta9');
card9.addEventListener('click', function() {
    card9.classList.toggle('is-flipped');
});
var card10 = document.getElementById('carta10');
card10.addEventListener('click', function() {
    card10.classList.toggle('is-flipped');
});
var card11 = document.getElementById('carta11');
card11.addEventListener('click', function() {
    card11.classList.toggle('is-flipped');
});
var card12 = document.getElementById('carta12');
card12.addEventListener('click', function() {
    card12.classList.toggle('is-flipped');
});