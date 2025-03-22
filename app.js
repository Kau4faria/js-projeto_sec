//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'jogo de adivinhar';

//let subtitulo = document.querySelector('p');
//subtitulo.innerHTML = 'coloque um numero entre 1 a 10';
let numeroChute = 5;
exibirTextoNaTela('h1', 'jogo de adivinhar');
exibirTextoNaTela('p', 'escolha um numero entre 1 a 10');

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10) + 1;
} 

let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto)

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag, texto);
    campo.innerHTML = texto;
}

function verificarChute() {
    if(numeroChute > 0){
        let chute = parseInt(document.querySelector('input').value);
        numeroChute--;
        let palavraChute = numeroChute === 1 ? 'chute' : 'chutes'
        if(chute === numeroSecreto){
          exibirTextoNaTela('p', 'voce acertou');
        } else {
            if(numeroChute === 0){
                exibirTextoNaTela('p', `voce errou, voce nao tem mais tentativas`);
                console.log(numeroChute)
            } else if(chute < numeroSecreto){
                exibirTextoNaTela('p', `voce errou, o numero é maior, voce tem mais ${numeroChute} ${palavraChute}`)
            } else{
                exibirTextoNaTela('p', `voce errou, o numero é menor, voce tem mais ${numeroChute} ${palavraChute}`)
            }
        }
    }
}