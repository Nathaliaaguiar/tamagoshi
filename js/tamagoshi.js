//codigo retirado do github https://raw.githubusercontent.com/fmoreirati/tamagoshi/master/js/tamagoshi.js
var nome = "";
var saude = 50;
var fome = 50;
var tempo = 0;

setInterval(display, 60000);//1000 = 1seg
display()

function display() {
    tempo++ //tempo = tempo + 1
    document.getElementById("tempo").innerHTML="Tempo: " + tempo
    document.getElementById("saude").innerHTML="Saude: " + saude
    document.getElementById("fome").innerHTML="Fome: " + fome
    document.getElementById("humor").innerHTML="humor" + humor()
    imagem();
}

function humor() {
   return(fome + saude) / 2;
}

function comer(valor) {
    if(fome < 100){
      fome = fome + valor 
}

function remedio(valor) {
    
}

function imagem() {
   let img = "t01.gif";
    if (saude == 0 || fome == 0)
        img = "t07.gif";
    else if (tempo <= 4)
        img = "t01.gif";
    else if (tempo <= 8)
        img = "t02.gif";
    else if (tempo <= 16)
        img = "t03.gif";
    else if (tempo <= 32)
        img = "t05.gif";
    else if (tempo <= 64)
        img = "t06.gif";

    document.getElementById("foto").src = "img/" + img;
}