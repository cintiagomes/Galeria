"use strict"

const limpar = (elemento) => {
    while(elemento.firstChild){
        elemento.removeChild(elemento.lastChild)
    }
}

const pegarImagens = (raca) => fetch(`https://dog.ceo/api/breed/${raca}/images`)
 
const procurarImagens = async (evento) => {
 
    if (evento.key === 'Enter') {
    const raca = evento.target.value
    const imagensResponse = await pegarImagens(raca)
    const imagens = await imagensResponse.json()
 
    limpar(document.querySelector(".galeria-container"))
    limpar(document.querySelector(".slides-container"))

    carregarImagens(imagens.message)
    carregarSlides(imagens.message)
}
}
 
const limparId = (urlImagem) => {
    const posBarra = urlImagem.lastIndexOf('/') + 1
    const posPonto = urlImagem.lastIndexOf('.')
    return urlImagem.substring(posBarra, posPonto)
}
 
const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container")
    const novoLink = document.createElement("a")
    novoLink.href = `#${limparId(urlImagem)}`
    novoLink.classList.add("galeria-itens")
    novoLink.innerHTML = `<img src="${urlImagem}" alt="">`
    container.appendChild(novoLink)
}
 
const carregarImagens = (imagens) => imagens.forEach(criarItem)
 
const criarSlide = (urlImagem, indice, arr) => {
    const container = document.querySelector(".slides-container")
    const slide = document.createElement("div")
    slide.classList.add("slide")
    slide.id = limparId(urlImagem)
 
    const indiceAnterior = indice > 0 ? indice - 1 : arr.length - 1
 
    const idAnterior = limparId(arr[indiceAnterior])
   
    const indiceProximo = indice < arr.length - 1 ? indice + 1 : 0
    const idProximo = limparId(arr[indiceProximo])
 
    slide.innerHTML = `
    <div class="imagem-container">
                    <a href="" class="fechar">&#10006;</a>
                    <a href="#${idAnterior}" class="navegacao anterior">&#171;</a>
                    <img src="${urlImagem}" alt="">
                    <a href="#${idProximo}" class="navegacao proximo">&#187;</a>
    </div>
    `
    container.appendChild(slide)
}
 
const carregarSlides = (imagens) => imagens.forEach(criarSlide)
 
document.querySelector(".pesquisa-container input")
.addEventListener('keypress', procurarImagens)

// const imagens = [
//     "./img/Banana Fish.jpg",
//     "./img/Boku-no-Hero.png",
//     "./img/Demon Slayer.jpg",
//     "./img/Evangelion.jpg",
//     "./img/Fire Force.jpg",
//     "./img/Jujutsu Kaisen.jpg",
//     "./img/Tokyo Ghoul.jpg",
//     "./img/Yuri On Ice.jpg"
// ]

// const criarItem = (urlImagem) => {
//     const conteiner = document.querySelector(".galeria-container")
//     // conteiner.innerHTML += `
//     //     <a href="${urlImagem}" class="galeria-itens">
//     //         <img src="${urlImagem}" alt="">
//     //     </a>
//     // `

//     const novoLink = document.createElement("a")
//     novoLink.href =urlImagem 
//     novoLink.classList.add("galeria-itens")
//     novoLink.innerHTML = `<img src="${urlImagem}" alt="">`
//     conteiner.appendChild(novoLink)
// }

// const carregarImagens = () => imagens.forEach(criarItem)

// const criarSlides = (urlImagem, indice, arr) =>{
//     const container = document.querySelector()
//     const slides = document.createElement("div")
//     slides.classList.add("slide")
//     slides.id = limparId(urlImagem)

//     const
// }

// carregarImagens()