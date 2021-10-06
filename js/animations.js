const ratio = .25
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}
let targetsToBottom = document.querySelectorAll('.animation-to-bottom')
let targetsToTop = document.querySelectorAll('.animation-to-top')
let targetsToLeft = document.querySelectorAll('.animation-to-left')
let targetsToRight = document.querySelectorAll('.animation-to-right')
let targetsScale = document.querySelectorAll('.animation-scale')
let targetsBottomToTop = document.querySelectorAll('.animation-bottom-to-top')
let targetsTopToBottom = document.querySelectorAll('.animation-top-to-bottom')

let callbacks = function(entries) {
    entries.forEach(entry => {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('animation')
        }
    })
}

let observer = new IntersectionObserver(callbacks,options) 

targetsToBottom.forEach(target => {
    observer.observe(target)
})

targetsToTop.forEach(target => {
    observer.observe(target)
})

targetsToLeft.forEach(target => {
    observer.observe(target)
})

targetsToRight.forEach(target => {
    observer.observe(target)
})

targetsScale.forEach(target => {
    observer.observe(target)
})

targetsBottomToTop.forEach(target => {
    observer.observe(target)
})

targetsTopToBottom.forEach(target => {
    observer.observe(target)
})