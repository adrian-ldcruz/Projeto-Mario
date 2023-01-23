/*Passo a passo
OBJETIVO 1  -  quando o user clicar no botão, abrir o modal
    passo 1  :  pegar o elementa que representa o botão
    passo 2  :  identificar quando o user clicar no botão
    passo 3  :  pegar o elemento do modal
    passo 4  :  abrir o modal
OBJETIVO 2  -  quando o user clicar no X, fechar o modal
    passo 1  :  pegar o elemento de fechar o modal
    passo 2  :  identificar quando o user clicar no X
    passo 3  :  fechar o modal
*/


const botaoTrailer = document.querySelector(".botao-trailer"); //pegar elemento do botão
const botaoFecharModal = document.querySelector(".fechar-modal"); //pegar elemento do X
const video = document.getElementById("video"); //pegar elemento do video
const modal = document.querySelector(".modal"); //pegar elemento do modal
const linkDoVideo = video.src; //link do video para não colocar HARDCODE (informação dentro do código)

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => { //quando o user clicar no botao
    alternarModal(); //abrir o modal (com a classe do CSS)
    video.setAttribute("src", linkDoVideo); //coloca o link do vídeo para que saia o volume
});

botaoFecharModal.addEventListener("click", () => { //quando o user clicar no X
    alternarModal(); //fecha o modal (remove a classe "aberto" do HTML)
    video.setAttribute("src","") //tira o link do vídeo para que não saia o volume quando fechar o modal
});


