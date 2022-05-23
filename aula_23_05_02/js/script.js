var botao = document.getElementById('botao')
var lamp = document.getElementById('lampada')

//console.log(lamp)

botao.onclick = function(){
    //alert('funcionou')
    if(botao.value == 'acender'){
        lamp.src = './img/acesaa.png'
        botao.value = "apagar"
        botao.innerHTML = 'Apagar'
    }
    else{
        lamp.src = './img/apagadaa.png'
        botao.value = "acender"
        botao.innerHTML = 'Acender'
    }
}