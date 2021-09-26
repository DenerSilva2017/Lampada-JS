let ligar = document.getElementById('ligar')
let desligar = document.getElementById('desligar')
let lampada = document.getElementById('lamp')
let status = 'inteira'

ligar.addEventListener('click', funcaoLigar)
desligar.addEventListener('click', funcaoDesligar)

lampada.addEventListener('mouseenter', funcaoLigar)
lampada.addEventListener('mouseout', funcaoDesligar)
lampada.addEventListener('dblclick', funcaoQuebrar)

function funcaoLigar(){
    if(status == 'inteira'){
        lampada.src = './img/ligada.jpg'
    }   
}
function funcaoDesligar(){
    if(status == 'inteira'){
        lampada.src = './img/desligada.jpg'
    }
}

function funcaoQuebrar(){
    lampada.src = './img/quebrada.jpg';
    status = 'quebrada'
}

