import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//pegar todos os botões que existe com a class check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
    //adcionar a escuta
    button.addEventListener ("click", handleClick)
})

// quando o botão delete for clicado ele abre a modal
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick (event, check = true) {
    event.preventDefault()
    const text = check ? "Marca como lida" : "Excluir"
    const roomId = document.querySelector("#room-id").dataset.id
    const slug = check ? "check" : "delete"
    const questionId = event.target.dataset.id


    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text} esta pergunta?`
    modalDescription.innerHTML = check ? `Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta?` : `Tem certeza que deseja ${text.toLocaleLowerCase()} essa pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
    // abrir modal
    modal.open()
}