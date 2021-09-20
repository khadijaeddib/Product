const buttons = document.querySelectorAll('.blogs-slides button')

buttons.forEach( button=> {
    button.addEventListener('click', () =>{
        const li = button.parentElement
        const ul = li.parentElement
        ul.querySelector('.active-button').classList.remove('active-button')
        button.classList.add('active-button')

        const buttonClass = button.getAttribute('id')
        const h4 = document.querySelector(`.${buttonClass}`)

        h4.parentElement.parentElement.parentElement.parentElement.querySelector('.active-title').classList.remove('active-title')
        h4.classList.add('active-title')
    })
});