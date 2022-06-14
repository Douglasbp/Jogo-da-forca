var entrada = document.querySelector(".entrada");
entrada.disabled = true;
var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");

function start(){
    
    entrada.disabled = false;
    erros = 0;
    acertos = 0;
    i = Math.floor(Math.random() * palavras.length);
    caracteres = [];
    linhas = document.querySelector(".linhas");
    
    btn1.innerHTML = "";
    btn2.innerHTML = "";
    mostraErros.innerHTML = "";
    mensagem.innerHTML = "";
    mensagem2.innerHTML = "";
    novo.innerHTML = "";
    btn1.innerHTML = `<canvas class="forca" width="400" height="400"></canvas>`;
    
    btn2.innerHTML += `<p class="linhas"></p>`
    novo.innerHTML = '<button class="botao botao1" onclick="start()">Novo jogo</button>';
    novo.innerHTML += '<button class="botao botao2" onclick="cancelar()">Desistir</button>';
    
    sorteia();
    desenhaForca();

}