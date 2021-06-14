const request = require('request');

const forecast = (latitude,longitude,callback) => {

    const url = `http://api.weatherstack.com/forecast?access_key=d48fa02738c7301e4c4c10b1ee6217dd&query=${latitude},${longitude}&units=f`;

    request({ 'url': url, json: true }, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather service !',undefined);
        }else if(body.error){
            callback('Unable to find location',undefined)
        }else{
            callback(undefined,`${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. There is a ${body.current.feelslike} chance of rain and Cloudy for testing.`)
        }
    })
}

module.exports = forecast;