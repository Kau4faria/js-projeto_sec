//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'jogo de adivinhar';

//let subtitulo = document.querySelector('p');
//subtitulo.innerHTML = 'coloque um numero entre 1 a 10';

exibirTextoNaTela('h1', 'jogo de adivinhar');
exibirTextoNaTela('p', 'escolha um numero entre 1 a 10');

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag, texto);
    campo.innerHTML = texto;
}

function verificarChute() {
    alert('apertou o botao');
}