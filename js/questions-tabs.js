const questionsButtons = document.querySelectorAll('ul button')

questionsButtons.forEach( questionButton=> {
    questionButton.addEventListener('click', () => {

        const li = questionButton.parentElement

        let activeLi = li.parentElement.parentElement.querySelector('.active')

        if (activeLi) activeLi.classList.remove('active')

        if (activeLi == li) {
            activeLi.classList.remove('active')
        } else {
            li.classList.add('active')
        }
            
    })
});
