const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWVnYS1taW5kIiwiYSI6ImNsMzdwa2FqYTAzazkzaW1uMWlzOWw1dGEifQ.Ez2gJSGcIB5ZL1lW_dx1kA&limit=1'

    request({uri: url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect location services!',undefined)
        }else if(response.body.features.length === 0){
            callback('Unable to find location, try another search',undefined)
        }else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude : response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode