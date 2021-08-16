// using fetch: running in client side JS
// getting a string- to fetch data from

const surprisemeForm = document.querySelector('form')
const nameSum = document.querySelector('form')
const yearSearch = document.querySelector('#yob-input')
const nameSearch = document.querySelector('#name-input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')




surprisemeForm.addEventListener('submit', (event) => {
    event.preventDefault()


    const yearOfBirth = yearSearch.value
    const name = nameSearch.value


    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/surpriseme?yob=' + yearOfBirth + '&name=' + name).then((response) => {

        response.json().then((data) => {
            console.log(data)
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.value
            }

        })
    })
})

nameSum.addEventListener('submit', (e) => {
    e.preventDefault()


    const yearOfBirth = yearSearch.value
    const name = nameSearch.value

    fetch('http://localhost:3000/namesum?yob=' + yearOfBirth + '&name=' + name).then((response) => {

        response.json().then((data) => {
            console.log(data)
            if (data.error) {
                messageTwo.textContent = data.error
            } else {

                messageTwo.textContent = data.value
            }

        })
    })
})

