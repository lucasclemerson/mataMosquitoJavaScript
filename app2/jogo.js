// descobrir tamanho da tela
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?' , '')

if(nivel === '1'){
    criaMosquitoTempo = 1500
}else if(nivel === '2'){
    criaMosquitoTempo = 1000
}else if(nivel === '3'){
    criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

var cronometro = setInterval( function(){
    tempo -= 1
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    }
    document.getElementById('cronometro').innerHTML = tempo
}, 1000)

ajustaTamanhoPalcoJogo()

//corrigir erro de precedência do body e definir a posição do mosquito
function posicaoRandomica(){
    //remover mosquito anterior caso exista e remover vidas
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        if(vidas > 3){
            window.location.href = 'fim_de_jogo.html'
        }
        document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
        vidas++
    }
    
    //criar novo mosquito
    var posicaox = Math.floor(Math.random() * largura - 90)
    var posicaoy = Math.floor(Math.random() * altura - 90)

    posicaox = posicaox < 0 ? 0 : posicaox
    posicaoy = posicaoy < 0 ? 0 : posicaoy

    console.log(posicaox, posicaoy)

    // criar elemento
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaox + 'px'
    mosquito.style.top = posicaoy + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)
}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2: 
            return 'mosquito3'
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    } 
}

