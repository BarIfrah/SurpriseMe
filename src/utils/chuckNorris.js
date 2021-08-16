const request = require('postman-request')

const chuckNorris = (callback) => {

    const chuckNorrisUrl = 'https://api.chucknorris.io/jokes/random'
    request({ url: chuckNorrisUrl, json: true }, (error, response) => {
        if (error) {
            callback('The server is unable to connect to Chuck Norris', undefined)
        } else {
            callback(undefined, {
                quote: response.body.value
            })
        }
    })
}
module.exports = chuckNorris