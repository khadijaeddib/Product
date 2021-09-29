let slideItems = document.querySelector(".blogs-section-items")

let firstSlideButton = document.querySelector('#first-slide-button')
let secondSlideButton = document.querySelector('#second-slide-button')
let thirdSlideButton = document.querySelector('#third-slide-button')

let ul = firstSlideButton.parentElement.parentElement

let scrollX = 1135


const maxScrollLeft = slideItems.scrollWidth - slideItems.clientWidth

function slide() {
    if (slideItems.scrollLeft > (maxScrollLeft - 1)) {
        ul.querySelector('.active-button').classList.remove('active-button')
        firstSlideButton.classList.add('active-button')

        slideItems.scrollLeft = 0

    }else {
        ul.querySelector('.active-button').classList.remove('active-button')
        secondSlideButton.classList.add('active-button')

        slideItems.scrollLeft +=scrollX
        slideItems.style.scrollBehavior='smooth'

        // if (slideItems.scrollLeft = scrollX) {
        //     ul.querySelector('.active-button').classList.remove('active-button')
        //     secondSlideButton.classList.add('active-button')
        // }

        if (slideItems.scrollLeft >= scrollX) {
            ul.querySelector('.active-button').classList.remove('active-button')
            thirdSlideButton.classList.add('active-button')
        }
    }
}

let timer = setInterval(slide,5000)

firstSlideButton.addEventListener('click', () => {
    ul.querySelector('.active-button').classList.remove('active-button')
    firstSlideButton.classList.add('active-button')

    slideItems.scrollLeft =0
    slideItems.style.scrollBehavior='smooth'
})

secondSlideButton.addEventListener('click', () => {
    ul.querySelector('.active-button').classList.remove('active-button')
    secondSlideButton.classList.add('active-button')

    slideItems.scrollLeft = scrollX
    slideItems.style.scrollBehavior='smooth'
})
thirdSlideButton.addEventListener('click', () => {
    ul.querySelector('.active-button').classList.remove('active-button')
    thirdSlideButton.classList.add('active-button')

    slideItems.scrollLeft =scrollX * 2
    slideItems.style.scrollBehavior='smooth'
})


if (window.matchMedia('(min-width: 2560px)').matches) {
    scrollX = 1925
}

if (window.matchMedia('(max-width: 1024px)').matches) {
    scrollX = 953
}