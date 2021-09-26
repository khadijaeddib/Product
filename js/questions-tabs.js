const questionsButtons = document.querySelectorAll('ul button')

let showAnswers = false

questionsButtons.forEach( questionButton=> {
    questionButton.addEventListener('click', () => {

        const li = questionButton.parentElement
        const ul = li.parentElement.parentElement
        let ulActiveli = ul.querySelector('.active-li')
        let ulActivep = ul.querySelector('.active-p')
        const buttonId = questionButton.getAttribute('class')
        const p = document.querySelector(`#${buttonId}`)

        
        if (!showAnswers) {
            if (ulActiveli && ulActivep) {
                ulActiveli.classList.remove('active-li')
                ulActivep.classList.remove('active-p') 
            } 
            li.classList.add('active-li')
            p.classList.add('active-p')
            p.style.animation="showAnswer .5s"

            showAnswers = true
            
        }else {
            p.style.animation="hideAnswer .5s"
            setTimeout(function(){ 
                li.classList.remove('active-li')
                p.classList.remove('active-p')
            }, 300)

            showAnswers = false
        }
           
    })
});
