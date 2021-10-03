const emailForm= document.querySelector('.email-form')
const footerEmailInput = document.querySelector('.email-form input[type="text"]')

function validateEmailProduct(e) {
    e.preventDefault ()
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (footerEmailInput.classList.contains('error')) {
      footerEmailInput.classList.remove('error')
    }

    if (footerEmailInput === null) return

    if(footerEmailInput.value.match(emailFormat)) {
      console.log(footerEmailInput.value)

      footerEmailInput.value = ''
      footerEmailInput.style.borderColor='#BCD0E5'

    }else {
      setTimeout(() => footerEmailInput.classList.add('error'), 100)
    }
}
emailForm.addEventListener('submit', validateEmailProduct)

