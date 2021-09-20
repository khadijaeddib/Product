const menuButton = document.querySelector('.main-header-nav-btn')
const HeaderNavCollapse =  document.querySelector('.collapse-nav')
const HeaderNavCollapseItems =  document.querySelector('.collapse-nav-items')

let showMenu = false;

menuButton.addEventListener('click', toggleMenu)

function toggleMenu() {
    if (!showMenu) {
        HeaderNavCollapse.classList.add('open-menu')
        HeaderNavCollapseItems.classList.add('open-menu-items')

        HeaderNavCollapseItems.style.animation = 'showMenu 1s'
        
        showMenu = true;

    } else {
        HeaderNavCollapseItems.style.animation = 'hideMenu 1s'

        setTimeout(function(){ 
            HeaderNavCollapse.classList.remove('open-menu')
            HeaderNavCollapseItems.classList.remove('open-menu-items')
        }, 700)
        
        showMenu = false
    }
}