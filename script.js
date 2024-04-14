const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const btnTry = document.querySelector("#fortuneCookie")
const btnReset = document.querySelector("#btnReset")

const frasesBiscoitoDaSorte = [
    "Hoje é um bom dia para tentar algo novo.",
    "A verdadeira felicidade está nas pequenas coisas.",
    "Um amigo pede apenas o seu tempo e não o seu dinheiro.",
    "Um sorriso é o seu passaporte para o coração dos outros.",
    "Não tema o que você não conhece.",
    "O maior risco é não arriscar.",
    "Você em breve alcançará grande sucesso.",
    "Os seus esforços serão recompensados.",
    "A vida é sobre fazer escolhas. Hoje, faça a escolha certa.",
    "A perseverança é o que diferencia o possível do impossível.",
    "A sorte favorece quem está preparado.",
    "Hoje, dê a alguém o que você mais deseja receber.",
    "A amizade é um presente precioso que você recebe a cada dia.",
    "Mire alto, pois as estrelas estão dentro do seu alcance.",
    "A mudança começa dentro de você, dê o primeiro passo.",
    "Acredite em milagres, mas não dependa deles.",
    "A próxima vez que você se encontrar, será em uma situação melhor.",
    "A felicidade bate à porta, mas o trabalho abre.",
    "Seu talento será reconhecido e devidamente recompensado.",
    "Sorria mais, porque a vida é bela."
  ];

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

function handleTryClick(){
    toggleScreen()

    let luckySentence = document.querySelector(".screen2 h2")
    let randomNumber = Math.round(Math.random() * 20)

    luckySentence.textContent = frasesBiscoitoDaSorte[randomNumber]

}

function handleResetClick(){
    toggleScreen()
}

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}