const menuButton = document.querySelector('.main-header-nav-btn')
const HeaderNavCollapse =  document.querySelector('.main-header-nav')

let showMenu = false;

menuButton.addEventListener('click', toggleMenu)

function toggleMenu() {
    if (!showMenu) {
        HeaderNavCollapse.classList.add('open-menu')

        HeaderNavCollapse.style.animation = 'showMenu 1s'
        
        showMenu = true;

    } else {
        HeaderNavCollapse.style.animation = 'hideMenu 1s'

        setTimeout(function(){ 
            HeaderNavCollapse.classList.remove('open-menu')
        }, 400)
        
        showMenu = false
    }
}