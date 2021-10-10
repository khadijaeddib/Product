const playButton = document.querySelector('.play-btn')
const modal = document.querySelector('.modal')
const modalContent = document.querySelector('.modal-content')
const video = document.querySelector('.modal-content iframe')
const closeButton = document.querySelector('.close-btn')


function showModal () {
    video.src="https://www.youtube.com/embed/N5wpD9Ov_To"
    modal.classList.add('visible') 
    video.style.animation = "showModalAnimation .6s"
}

function hideModal () {
    video.src = ''
    video.style.animation = "hideModalAnimation .4s ease-out"
    setTimeout(function() {modal.classList.remove('visible')}, 400)
}

function windowClick(event) {
    if (event.target == modal) {
        hideModal ()
    }
    if (event.target == modalContent) {
        hideModal ()
    }
}

function escapeClick(e) {
    if (e.key === "Escape" || e.key === "Esc") {
        hideModal ()
    }
}


playButton.addEventListener('click',showModal)
closeButton.addEventListener('click',hideModal)
window.addEventListener('click', windowClick)
window.addEventListener('keydown', escapeClick)