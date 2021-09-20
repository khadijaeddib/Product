SignUpButton = document.querySelector('input[type="submit"]')
emailInput = document.querySelector('input[type="email"]')

function validateEmail() {
    var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(emailInput.value.match(emailformat) && emailInput !== undefined) {
      console.log(emailInput.value)
      emailInput.value = ''
      emailInput.style.borderColor='#BCD0E5'
    }else {
        emailInput.style.animation = 'shake 0.2s ease-in-out 0s 2'
        emailInput.style.borderColor='red'
        // emailInput.value = ''
    }
}
SignUpButton.addEventListener('click', validateEmail)