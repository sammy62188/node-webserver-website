const { response } = require('express')
const request = require('request')

geocode = (address, callback) =>{
    url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1Ijoic2Ftb2oiLCJhIjoiY2tpaGIzaGx0MDVheDJ6cGI1aXhvbXI5ZiJ9.hKWb3RDZunwL3qYU8T2iFA'
    request({url: url, json: true},(error, response) =>{
        if(error){
            callback('Please supply a valid location', undefined)
        }else if(response.body.features.length== 0){
            callback('No value found for this location', undefined)
        }else{
            callback(undefined, {
                'longitude': response.body.features[0].center[0],
                'latitude': response.body.features[0].center[1],
                'location': response.body.features[0].place_name,
            })
        }
    })
}

module.exports = geocode