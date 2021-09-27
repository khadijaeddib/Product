const signUpButton = document.querySelector('.email-form input[type="submit"]')
const emailInputProduct = document.querySelector('.email-form input[type="email"]')

function validateEmailProduct() {
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(emailInputProduct.value.match(emailFormat) && emailInputProduct !== undefined) {
      console.log(emailInputProduct.value)
      emailInputProduct.value = ''
      emailInputProduct.style.borderColor='#BCD0E5'
    }else {
      emailInputProduct.style.animation = 'shake 0.2s ease-in-out 0s 2'
      emailInputProduct.style.borderColor='red'
        // emailInput.value = ''
    }
}
signUpButton.addEventListener('click', validateEmailProduct)


const joinButton = document.querySelector('.resources-email-form input[type="submit"]')
const emailInputResources = document.querySelector('.resources-email-form input[type="email"]')

function validateEmailResources() {
  var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if(emailInputResources.value.match(emailFormat) && emailInputResources !== undefined) {
    console.log(emailInputResources.value)
    emailInputResources.value = ''
    emailInputResources.style.borderColor='#BCD0E5'
  }else {
    emailInputResources.style.animation = 'shake 0.2s ease-in-out 0s 2'
    emailInputResources.style.borderColor='red'
      // emailInput.value = ''
  }
}
joinButton.addEventListener('click', validateEmailResources)
