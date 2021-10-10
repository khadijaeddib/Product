switcher = document.querySelector('.switcher')

function toggleTheme() {
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark')
      localStorage.setItem("theme", "light")
    } else {
      document.body.classList.add('dark')
      localStorage.setItem("theme", "dark")
    }
}

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add('dark')
}

switcher.addEventListener('click', toggleTheme);