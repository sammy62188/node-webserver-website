const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./geocode')

const app = express()
const port = process.env.PORT || 3000

// set the path to the views and partial

const partialpath = path.join(__dirname, '../templates/partials')
const viewpath = path.join(__dirname, '../templates/views')
const publicpath = path.join(__dirname, '../public')

// set view engine

app.set(hbs, partialpath)
app.set('view engine', 'hbs')
app.set('views', viewpath)


// using the express engine to start the application

app.use(express.static(publicpath))


app.get('', (req, res)=>{
    res.render('index',{
        title: 'Weather App'
    })
})

app.get('/weather', (req, res)=>{
    if(!req.query.location){
        return res.send({
            error: 'You need to provide a location'
        })
    }else{
        geocode(req.query.location, (error, data)=>{
            if(error){
                return res.send({
                    error
                })
            }else{
                return res.send({
                    data
                })
            }
        })
    }
})

app.get('*', (req, res)=>{
    res.render('404',{
        title: 'Error Page',
        name: 'The page you are lookijng for does not exist'
    })
})


app.listen(port, ()=>{
    console.log('starting the application on port ' + port)
})