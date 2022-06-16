const ratings = document.querySelectorAll('.number')
const button = document.querySelector('.button')
const card = document.querySelector('.container')
const cardThankYou = document.querySelector('.card-thank-you')
const selectedRatingSpan = document.querySelector('.selected-rating')

ratings.forEach((rating) => {
    rating.addEventListener('click', function (e) {
        e.preventDefault()

        ratings.forEach((rating) => {
            rating.classList.remove('selected')
        })

        this.classList.add('selected')
    })
})

button.addEventListener('click', function(e) {
    e.preventDefault()

    const numberSelected = document.querySelector('.number.selected')
    const numberSelectedValue = numberSelected !== null ? numberSelected.getAttribute('data-val') : 0;

    if (numberSelected === null) {
        alert('Please select a number before you click submit :)')
        return false
    }

    card.classList.add('hidden')
    selectedRatingSpan.innerHTML = numberSelectedValue
    cardThankYou.classList.remove('hidden')    
})

