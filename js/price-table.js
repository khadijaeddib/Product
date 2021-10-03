fetch('data/price_table.json')
.then  (response => response.json())
.then (data => {
    buildTable(data)

    const ratio = .25
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: ratio
   }
   let targetsToTop = document.querySelectorAll('.animation-to-top')

   let callbacks = function(entries) {
    entries.forEach(entry => {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('animation')
        }
    })
   }
   let observer = new IntersectionObserver(callbacks,options) 

   targetsToTop.forEach(target => {
    observer.observe(target)
   })
})
   

const priceTableCard = `
    <h6 class="subscription-name"></h6>
    <p class="subscription-description"></p>
    <section class="price-value">
        <h2 class="subscription-price"></h2>
        <section class="price-value-content">
            <h4>$</h4>
            <h5>Per / month</h5>
        </section>
    </section>
    <section class="features"></section>
    <button class="button">Order Now</button>`

const priceTableRow = document.querySelector('.price-table-row')

function buildTable(subscriptions) {
    subscriptions.forEach(subscription => {
        const section = document.createElement('section')
        section.classList.add('price-table-column')
        section.classList.add('animation-to-top')

        if (subscription.exclusive) section.classList.add('exclusive')

        section.innerHTML = priceTableCard

        let name = section.querySelector('.subscription-name')
        let description = section.querySelector('.subscription-description')
        let price = section.querySelector('.subscription-price')

        name.innerHTML = subscription.name
        description.innerHTML = subscription.description
        price.innerHTML = subscription.price

        const features = section.querySelector('.features')

        subscription.features.forEach(feature => {
            const featureName = document.createElement('p')
            featureName.classList.add('center')
            featureName.innerHTML = feature

            features.appendChild(featureName)
        })

        priceTableRow.appendChild(section)
    })
}