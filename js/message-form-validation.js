const messageForm = document.querySelector('.resource-contact-message-form')
const nameInput = document.querySelector('.resource-contact-message-form input[type="text"]')
const emailInput = document.querySelector('.resource-contact-message-form input[type="email"]')
const message = document.querySelector('.resource-contact-message-form textarea')


function validateFormMessage(e) {
    e.preventDefault ()

    let obj = {
        name: nameInput.value,
        email: emailInput.value,
        message: message.value
    }
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (nameInput.classList.contains('error')) {
        nameInput.classList.remove('error')
    }
    if (emailInput.classList.contains('error')) {
        emailInput.classList.remove('error')
    }
    if (message.classList.contains('error')) {
        message.classList.remove('error')
    }

    if (!(nameInput.value.split(/(\s+)/).length > 2)) {
        setTimeout(() => nameInput.classList.add('error'), 100)

    }else if (!(emailInput.value.match(emailFormat))) {
        setTimeout(() => emailInput.classList.add('error'), 100)
        
    }else if (message.value == '') {
        setTimeout(() => message.classList.add('error'), 100)

    }else {
        nameInput.style.borderColor='#F5F5F5'
        emailInput.style.borderColor='#F5F5F5'
        message.style.borderColor='#F5F5F5'

        messageForm.reset()
        
        console.log(obj)
    }
}

messageForm.addEventListener('submit', validateFormMessage)
