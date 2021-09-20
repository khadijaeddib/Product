fetch('../price_table.json')
.then  (response => response.json())
.then (data => buildTable(data))


function buildTable(data) {
    let firstSubscriptionName = document.querySelector('.first-subscription-name')
    let firstSubscriptionDescription = document.querySelector('.first-subscription-description')
    let firstSubscriptionPrice = document.querySelector('.first-subscription-price')
    let firstSubscriptionFirstFeature = document.querySelector('.first-subscription-first-feature')
    let firstSubscriptionSecondFeature = document.querySelector('.first-subscription-second-feature')
    let firstSubscriptionThirdFeature = document.querySelector('.first-subscription-third-feature')

    let secondSubscriptionName = document.querySelector('.second-subscription-name')
    let secondSubscriptionDescription = document.querySelector('.second-subscription-description')
    let secondSubscriptionPrice = document.querySelector('.second-subscription-price')
    let secondSubscriptionFirstFeature = document.querySelector('.second-subscription-first-feature')
    let secondSubscriptionSecondFeature = document.querySelector('.second-subscription-second-feature')
    let secondSubscriptionThirdFeature = document.querySelector('.second-subscription-third-feature')

    let thirdSubscriptionName = document.querySelector('.third-subscription-name')
    let thirdSubscriptionDescription = document.querySelector('.third-subscription-description')
    let thirdSubscriptionPrice = document.querySelector('.third-subscription-price')
    let thirdSubscriptionFirstFeature = document.querySelector('.third-subscription-first-feature')
    let thirdSubscriptionSecondFeature = document.querySelector('.third-subscription-second-feature')
    let thirdSubscriptionThirdFeature = document.querySelector('.third-subscription-third-feature')




    for (let i = 1; i < data.length; i++) {
        firstSubscriptionName.innerHTML = data[0].name
        firstSubscriptionDescription.innerHTML = data[0].description
        firstSubscriptionPrice.innerHTML = data[0].price
        firstSubscriptionFirstFeature.innerHTML = data[0].features[0]
        firstSubscriptionSecondFeature.innerHTML = data[0].features[1]
        firstSubscriptionThirdFeature.innerHTML = data[0].features[2]

        secondSubscriptionName.innerHTML = data[1].name
        secondSubscriptionDescription.innerHTML = data[1].description
        secondSubscriptionPrice.innerHTML = data[1].price
        secondSubscriptionFirstFeature.innerHTML = data[1].features[0]
        secondSubscriptionSecondFeature.innerHTML = data[1].features[1]
        secondSubscriptionThirdFeature.innerHTML = data[1].features[2]

        thirdSubscriptionName.innerHTML = data[2].name
        thirdSubscriptionDescription.innerHTML = data[2].description
        thirdSubscriptionPrice.innerHTML = data[2].price
        thirdSubscriptionFirstFeature.innerHTML = data[2].features[0]
        thirdSubscriptionSecondFeature.innerHTML = data[2].features[1]
        thirdSubscriptionThirdFeature.innerHTML = data[2].features[2]
    }
}


 