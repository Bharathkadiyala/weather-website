const request = require('request');

const geocode = (address, callback) => {
    const geourl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiYmhhcmF0NjM5MCIsImEiOiJja3BueGx4b2wwd2lxMndxcXZ1YmU5dndiIn0._2E4eucDjpBCpedUwmNUAA&limit=1`;

    request({ 'url': geourl, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services !', undefined);
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search .', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;