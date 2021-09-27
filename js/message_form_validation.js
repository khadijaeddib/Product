const sendButton = document.querySelector('.resource-contact-message-form input[type="submit"]')
const nameInput = document.querySelector('.resource-contact-message-form input[type="text"]')
const emailInput = document.querySelector('.resource-contact-message-form input[type="email"]')
const message = document.querySelector('.resource-contact-message-form textarea')


function validateFormMessage() {
    let obj = {
        name: nameInput.value,
        email: emailInput.value,
        message: message.value
    }
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (!(nameInput.value.split(/\W+/).length >= 2)) {
        nameInput.style.animation = 'shake 0.2s ease-in-out 0s 2'
        nameInput.style.borderColor='red'

    }else if (!(emailInput.value.match(emailFormat) && emailInput !== undefined)) {
        emailInput.style.animation = 'shake 0.2s ease-in-out 0s 2'
        emailInput.style.borderColor='red'

    }else if (message.value == '') {
        message.style.animation = 'shake 0.2s ease-in-out 0s 2'
        message.style.borderColor='red'

    }else {
        console.log(obj)
        nameInput.style.borderColor='#F5F5F5'
        emailInput.style.borderColor='#F5F5F5'
        message.style.borderColor='#F5F5F5'
        nameInput.value = ''
        emailInput.value = ''
        message.value = ''
    }
}
sendButton.addEventListener('click', validateFormMessage)