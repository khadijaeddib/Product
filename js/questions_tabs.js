const questionsButtons = document.querySelectorAll('ul button')

questionsButtons.forEach( questionButton=> {
    questionButton.addEventListener('click', () => {

        const li = questionButton.parentElement

        let activeLi = li.parentElement.parentElement.querySelector('.active')
        
        li.classList.toggle('active')

        activeLi.classList.remove('active')
            
    })
});
