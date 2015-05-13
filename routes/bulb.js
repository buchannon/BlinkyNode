var express = require('express');
var router = express.Router();

//// button is attaced to pin 17, led to 18
//var pin = 11;
//var GPIO = require('onoff').Gpio,
//    led = new GPIO(pin, 'out');
//
//
///* GET users listing. */
//router.get('/', function(req, res, next) {
//    var onOffValue = req.params.onOffValue;
//
//    led.writeSync(onOffValue);
//    res.send('bulb ' + onOffValue + ', pin: ' + pin);
//});


//router.get('/', function(req, res, next) {
//    console.log(req);
//    //var onOffValue = req.params.OnOffValue;
//    var onOffValue = req.query.OnOffValue;
//    res.send('bulb ' + onOffValue + ', pin: test');
//});


var pin = 14;
var GPIO = require('onoff').Gpio,
    led = new GPIO(pin, 'out');
router.get('/', function(req, res, next) {
    //console.log(req);
    //var onOffValue = req.params.OnOffValue;

    var onOffValue = parseInt(req.query.OnOffValue);
    led.writeSync(onOffValue);
    res.send('bulb ' + onOffValue + ', pin: ' + pin);
});

module.exports = router;