export default function Modal() {

    const modalWrapper = document.querySelector('.modal-wrapper')

    // no html, na tag no botão de cancelar, eu criei um className chamada cancel para poder usar ela para pegar especificamente aquele button
    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener("click", close)

    function open() {
        // funcionalidade de atribuir a classe active para a modal
        modalWrapper.classList.add("active")
    }
    function close() {
        // funcionalidade de remover a class active da modal
        modalWrapper.classList.remove("active")
    }

    return {
        open,
        close
    }
}