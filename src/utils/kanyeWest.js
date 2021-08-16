const chalk = require('chalk')
const request = require('postman-request')

const kanyeWest = (callback) => {
    // encodeURI changes to ascii value in hexa to encode without crashes
    const kanyeUrl = "https://api.kanye.rest"
    request({ url: kanyeUrl, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to Kanye. He might be after Kim...', undefined)
        } else {
            callback(undefined, {
                quote: response.body.quote
            })
        }
    })
}
module.exports = kanyeWest