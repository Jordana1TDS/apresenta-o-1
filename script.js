const imagem = document.getElementById("imagem");
const botao = document.getElementById("botao");
const texto = document.getElementById("texto");

botao.addEventListener("click", ()=>{
    fetch("https://pokeapi.co/api/v2/pokemon/6")
    .then(resposta => resposta.json())
    .then(dados => {
    texto.textContent = dados.name;
    imagem.src = dados.sprites.front_default;
    })
})