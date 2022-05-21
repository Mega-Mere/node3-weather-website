const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=51989e8c8d12b99c5dc1943b521f9abc&query='+ longitude + ',' + latitude +'&units=f'

request({ uri: url, json: true}, (error, response) => {
    if(error){
        callback('Unable to connect to weather service', undefined)
    }else if(response.body.error){
        callback('Unable to find location',undefined)
    } 
    else {
        callback(undefined, response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' and it feels like ' +response.body.current.feelslike + '.The humidity is ' + response.body.current.humidity +'.')
    }
})

}

module.exports = forecast