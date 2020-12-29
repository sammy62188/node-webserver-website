const Webform = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message1')
const messageTwo = document.querySelector('#message2')

Webform.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value
    messageOne.textContent = 'Loading .....'
    messageTwo.textContent = ''
    fetch('http://localhost:3000/weather?location=" ' + location + '"').then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                for (var key in data) {
                    messageOne.textContent = 'Your location is ' + data[key].location
                    messageTwo.textContent = 'and longitude is ' + data[key].longitude + ' with a latitude of '
                        + data[key].latitude
                }
            }
        })
    })
})