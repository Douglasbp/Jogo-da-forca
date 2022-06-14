var palavras = ["centro", "sorvete", "parcela", "caminho", "casa", "jornal", "casca", "visivel", "internet", "deletar"];
var tela = document.querySelector("html");
var entrada = document.querySelector(".entrada");
var i = Math.floor(Math.random() * palavras.length);
var letras = palavras[i].split("");
var acertos;
var caracteres = [];
var mensagem = document.querySelector(".mensagem");
var mensagem2 = document.querySelector(".mensagem2");
var erros;
var mostraErros = document.querySelector(".erros");
var novo = document.querySelector('.novojogo');
function sorteia() {
    
    var letras = palavras[i].split("");
    var linhas = document.querySelector(".linhas");
    
    var entrada = document.querySelector(".entrada");
    for(var x = 0; x < palavras[i].length; x++){
        linhas.innerHTML += `<div class='sublinhado esconder'>${letras[x].toUpperCase()}</div>`;
    }

    entrada.focus();
}
tela.addEventListener("click", function(event){
    var entrada = document.querySelector(".entrada");
    event.target = entrada.focus();
})
console.log(palavras[i]);

entrada.addEventListener("input", function(){
    var conteudo = document.querySelectorAll(".sublinhado");
        if(!caracteres.includes(this.value.toUpperCase())){
           
            caracteres.push(this.value.toUpperCase());

            if (!palavras[i].includes(this.value.toLowerCase())){ 
                mostraErros.innerHTML += `${this.value.toUpperCase()}`; 
                erros++;
            }
            
            for(var x = 0; x < palavras[i].length; x++){ 
                letras = conteudo[i];
                
                if(conteudo[x].textContent == this.value.toUpperCase()){
                    
                    conteudo[x].classList.remove("esconder"); 
                    acertos++; 
                }
                
            }
        }
    if(acertos == palavras[i].length){
        //mensagem.style.color = "green";
        //mensagem.innerHTML = `Parabens, você venceu!`; 
        mensagem2.innerHTML = "<img src='img/simpsons10.png'>";
        novoJogo();
    }
    if(erros == 1){
        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");

        console.log("errou uma vez hehe");
        pincel.strokeStyle = '#0A3871';
        pincel.beginPath();
        pincel.arc(347, 127, 35, 0, 2*3.14);
        pincel.stroke();
    } else if ( erros == 2) {  
        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");

        pincel.strokeStyle = '#0A3871';
        pincel.moveTo(347, 160);
        pincel.lineTo(347, 290);
        pincel.lineWidth = 5;
        pincel.stroke();
    } else if (erros == 3) {
        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");

        pincel.strokeStyle = '#0A3871';
        pincel.moveTo(347, 180);
        pincel.lineTo(300, 230);
        pincel.lineWidth = 5;
        pincel.stroke();
    } else if(erros == 4) { 
        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");

        pincel.strokeStyle = '#0A3871';
        pincel.moveTo(347, 180);
        pincel.lineTo(393, 230);
        pincel.lineWidth = 5;
        pincel.stroke();
    } else if (erros == 5) { 
        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");

        pincel.strokeStyle = '#0A3871';
        pincel.moveTo(347, 290);
        pincel.lineTo(393, 350);
        pincel.lineWidth = 5;
        pincel.stroke();
    } else if (erros == 6) { 
        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");

        pincel.strokeStyle = '#0A3871';
        pincel.moveTo(347, 290);
        pincel.lineTo(293, 350);
        pincel.lineWidth = 5;
        pincel.stroke();
        
        mensagem.style.color = "red";
        //mensagem.innerHTML = `Você perdeu!` 
        mensagem2.innerHTML = "<img src='img/simpsons00.png'>";
        novoJogo() 
    }

    console.log(erros);
    this.value = "";
    
})
function desenhaForca() {
    var tela = document.querySelector("canvas");
    var pincel = tela.getContext("2d");

    pincel.strokeStyle = '#0A3871';
    pincel.moveTo(50, 380);
    pincel.lineTo(250, 380);
    pincel.lineWidth = 5;
    pincel.stroke();
    
    pincel.strokeStyle = '#0A3871';
    pincel.moveTo(150, 380);
    pincel.lineTo(150, 50);
    pincel.lineWidth = 5;
    pincel.stroke();

    pincel.strokeStyle = '#0A3871';
    pincel.moveTo(147, 50);
    pincel.lineTo(350, 50);
    pincel.lineWidth = 5;
    pincel.stroke();

    pincel.strokeStyle = '#0A3871';
    pincel.moveTo(347, 50);
    pincel.lineTo(347, 90);
    pincel.lineWidth = 5;
    pincel.stroke();
}

function novoJogo (){
    entrada.disabled = true;
}

