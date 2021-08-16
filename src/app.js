// building the web server for SurpriseME!
// npm i hbs (handlebars)
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const chuckNorris = require('./utils/chuckNorris')
const kanyeWest = require('./utils/kanyeWest')
const { callbackify } = require('util')
const { response } = require('express')
const sumName = require('./utils/sumNameValue')

const app = express()

// Define paths for 'express' config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')    // setup handlebars module
app.set('views', viewPath)       // this sets up 'views' non-default path
hbs.registerPartials(partialPath)// set up partial path


// Setup static directory to serve.
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => { // to use hbs file and render to response
    res.render('index', ({
        title: 'Surprise Me!',
        name: 'Anonymous Ibex'
    }))
})

// from here on we handle the different pages in the app
app.get('/aboutChuck', (req, res) => {
    res.render('aboutChuck', {
        title: 'About Chuck',
        name: 'Anonymous Ibex'
    })
})

app.get('/aboutKanye', (req, res) => {
    res.render('aboutKanye', {
        title: 'About Kanye',
        name: 'Anonymous Ibex'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        description: "I need somebody!",
        name: 'Anonymous Ibex'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Anonymous Ibex',
        errorMessage: 'Help article not found.'
    })
})

app.get('/surpriseMe', (req, res) => {
    if (!req.query.yob || isNaN(req.query.yob)) {
        return res.send({
            error: "Please insert a valid year of birth."
        })
    } else {
        if (req.query.yob <= 2000) {     // year input for chuck users
            chuckNorris((chuckeError, { quote } = {}) => {
                if (chuckeError) {
                    return res.send({
                        code: 400,
                        type: 'chuck-norris-joke',
                        error: chuckeError
                    })
                }
                res.send({
                    code: 200,
                    type: 'chuck-norris-joke',
                    value: quote
                })
            })
        } else {
            if (req.query.name) {
                if (req.query.name[0] !== 'A' && req.query.name[0] !== 'Z' &&
                    req.query.name[0] !== 'z' && req.query.name[0] !== 'z') {
                    kanyeWest((kanyeError, { quote } = {}) => {
                        if (kanyeError) {
                            return res.send({
                                code: 400,
                                type: 'kanye-west-quote',
                                error: kanyeError
                            })
                        }
                        res.send({
                            code: 200,
                            type: 'kanye-west-quote',
                            value: quote
                        })
                    })
                }

                else
                    return res.send({
                        code: 400,
                        type: 'kanye-west-quote',
                        error: "Invalid name. Kanye doesn't like 'A's' or 'Z's'"
                    })
            }
        }
    }
})

app.get('/namesum', (req, res) => {
    if (req.query.name) {
        // run name sum:
        if (req.query.name[0] !== 'Q') {
            res.send({
                code: 200,
                type: 'name-sum',
                value: sumName(req.query.name)
            })
        }
    }
})

// all 404's
// * wildcard (like in regex)
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Anonymous Ibex',
        errorMessage: 'Page not found'

    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
}) // start the server port 3000. is common when developing locally