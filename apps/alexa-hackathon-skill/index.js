module.change_code = 1;
'use strict';

var alexa = require('alexa-app');
var app = new alexa.app('hackathon-skill');
var cheerio = require('cheerio');


var rp = require('request-promise');
var moment = require('moment');


app.launch(function(request, response) {
    response.say('Welcome to Voice of Seefeld!').reprompt('You have any requests?').shouldEndSession(false);
});


app.error = function(exception, request, response) {
    console.log(exception)
    console.log(request);
    console.log(response);
    response.say('Sorry an error occured ' + error.message);
};

app.intent('Salut', {
    "slots": {
        "LastWord": "AMAZON.LITERAL"
    },
    "utterances": [
        "How you doing {idiot|LastWord}",
        "How you doing {stupid|LastWord}",
    ]
}, function(request, response) {
    var param = request.slot("LastWord");
    response.say("How dare you call me " + param);
});

module.exports = app;