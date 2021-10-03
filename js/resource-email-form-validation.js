const resourcesEmailForm = document.querySelector('.resources-email-form')
const emailInputResources = document.querySelector('.resources-email-form input[type="email"]')

function validateEmailResources(e) {
  e.preventDefault ()
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (resourcesEmailForm.classList.contains('error')) {
      resourcesEmailForm.classList.remove('error')
    }

    if (emailInputResources === null) return

    if(emailInputResources.value.match(emailFormat)) {
      console.log(emailInputResources.value)

      emailInputResources.value = ''
      emailInputResources.style.borderColor='#BCD0E5'

    }else {
      setTimeout(() => resourcesEmailForm.classList.add('error'), 100)
    }
}
resourcesEmailForm.addEventListener('submit', validateEmailResources)