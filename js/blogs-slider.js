let slideItems = document.querySelector(".blogs-section-items")

let firstSlideButton = document.querySelector('#first-slide-button')
let secondSlideButton = document.querySelector('#second-slide-button')
let thirdSlideButton = document.querySelector('#third-slide-button')

let ul = firstSlideButton.parentElement.parentElement

const slideVisible = 3
const slideNotVisible = 6

let scrollX = (slideItems.scrollWidth / slideVisible) + slideNotVisible

const maxScrollLeft = slideItems.scrollWidth - slideItems.clientWidth

slideItems.style.scrollBehavior='smooth'

function slider () {
    if (slideItems.scrollLeft <= scrollX - 1 ) {
        ul.querySelector('.active-button').classList.remove('active-button')
        secondSlideButton.classList.add('active-button')
    
    }else {
        ul.querySelector('.active-button').classList.remove('active-button')
        thirdSlideButton.classList.add('active-button')
    }

    if (slideItems.scrollLeft >= (maxScrollLeft - 1) ) {
        slideItems.scrollLeft = 0

        ul.querySelector('.active-button').classList.remove('active-button')
        firstSlideButton.classList.add('active-button')
    }

    slideItems.scrollLeft += scrollX
}

const runTimer = () => {
    timer = setInterval(slider, 5000)
}

runTimer()

firstSlideButton.addEventListener('click', () => {
    clearTimeout(timer)
    runTimer()
    ul.querySelector('.active-button').classList.remove('active-button')
    firstSlideButton.classList.add('active-button')

    slideItems.scrollLeft =0
    slideItems.style.scrollBehavior='smooth'
    
})

secondSlideButton.addEventListener('click', () => {
    clearTimeout(timer)
    runTimer()
    ul.querySelector('.active-button').classList.remove('active-button')
    secondSlideButton.classList.add('active-button')

    slideItems.scrollLeft = scrollX
    slideItems.style.scrollBehavior='smooth'
  
})


thirdSlideButton.addEventListener('click', () => {
    clearTimeout(timer)
    runTimer()
    ul.querySelector('.active-button').classList.remove('active-button')
    thirdSlideButton.classList.add('active-button')

    slideItems.scrollLeft =scrollX * 2
    slideItems.style.scrollBehavior='smooth'
    
})


