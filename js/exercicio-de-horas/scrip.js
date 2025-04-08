function carregar(){
    var hourText = document.getElementById("hora-texto");
    var hourImage = document.getElementById("hora-imagem");
    var data = new Date();
    var hora = data.getHours();
    hourText.innerHTML = `São ${hora} horas!`;
    if(hora >= 6 && hora <= 11){
        hourImage.innerHTML = "<img src='images/imagem-manha.jpg' alt=''>"
    } else if(hora > 11 && hora < 18){
        hourImage.innerHTML = "<img src='images/imagem-tarde.jpg' alt=''>"
    } else if(hora > 18 < 6){
        hourImage.innerHTML = "<img src='images/imagem-noite.jfif' alt=''>"
    }
}