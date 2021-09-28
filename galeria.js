"use strict"

// const imagens = pegarImagensDoBack

const imagens = [
    "./img/Banana Fish.jpg",
    "./img/Boku-no-Hero.png",
    "./img/Demon Slayer.jpg",
    "./img/Evangelion.jpg",
    "./img/Fire Force.jpg",
    "./img/Jujutsu Kaisen.jpg",
    "./img/Tokyo Ghoul.jpg",
    "./img/Yuri On Ice.jpg"
]

const criarItem = (urlImagem) => {
    const conteiner = document.querySelector(".galeria-container")
    // conteiner.innerHTML += `
    //     <a href="${urlImagem}" class="galeria-itens">
    //         <img src="${urlImagem}" alt="">
    //     </a>
    // `

    const novoLink = document.createElement("a")
    novoLink.href =urlImagem 
    novoLink.classList.add("galeria-itens")
    novoLink.innerHTML = `<img src="${urlImagem}" alt="">`
    conteiner.appendChild(novoLink)
}

const carregarImagens = () => imagens.forEach(criarItem)

carregarImagens()