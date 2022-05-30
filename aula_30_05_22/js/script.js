document.getElementById("botao").onclick = function(){
    var radios = document.getElementsByName("sex")
    var ano = (document.getElementById('ano')).value
    for (var i = 0; i < radios.length; i++){
        if (radios[i].checked){
            var escolha = radios[i].value
            console.log("Escolheu: " + escolha);
            resultado(escolha,ano)
        }
    }
}

