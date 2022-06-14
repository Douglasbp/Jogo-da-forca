function criaCampo() { 
    btn1.innerHTML = "";
    btn2.innerHTML = "";

    btn1.innerHTML = '<textarea maxlength="10" name="" id="campo" placeholder="Digite uma palavra ou frase"></textarea>';
    btn2.innerHTML += '<div class="aviso"><img src="img/icone.png" alt="icone de informação" width="12px" height="12px"><p>Max. de 10 letras.</p></div>';
    btn2.innerHTML += '<div class="opcoes"><button class="botao botao1" onclick="adicionaPalavra()">Salvar e começar</button><button class="botao botao2" onclick="cancelar()">Cancelar</button></div>';
    
}
function cancelar() {
    location.reload();
}
function adicionaPalavra() {
    
    var campo = document.querySelector("#campo");
    if(campo.value.length == 0) {
        alert("Adicione uma palavra ou clique em cancelar");
        campo.focus();
    } else {
        palavras.push(campo.value.toLowerCase());
        start();
    }
    console.log(palavras); 
}