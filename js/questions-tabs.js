const questionsButtons = document.querySelectorAll('ul button')

questionsButtons.forEach( questionButton=> {
    questionButton.addEventListener('click', () => {

        const li = questionButton.parentElement
        const ul = li.parentElement.parentElement

        let ulActiveLi = ul.querySelector('.active-li')
        let ulActiveP = ul.querySelector('.active-p')

        const buttonId = questionButton.getAttribute('class')
        const p = document.querySelector(`#${buttonId}`)

        li.classList.toggle('active-li')
        p.classList.toggle('active-p')
        p.style.animation="showAnswer .5s"

        ulActiveLi.classList.remove('active-li')
        ulActiveP.classList.remove('active-p')
           
    })
});
