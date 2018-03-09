var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const https = require('https');

function opportunityRoute() {
  var oppty = new express.Router();
  oppty.use(cors());
  oppty.use(bodyParser());


  oppty.get('/', function(req, res) {
    console.log("Opportunities");

    //Add real end point here
    var opportunities = require('./opportunities.json');
    res.send(opportunities);
  });

  oppty.get('/:id', function(req, res) {
    console.log("Opportunities:id");

    //Add real end point here
    var opportunities = require('./opportunities.json');
    var opportunity = opportunities.find( opp => opp.id === req.params.id );

    res.send(opportunity);
  });

  oppty.post('/subscribe', function(req, res) {
    console.log("Opportunities/subscribe");

    console.log(req.body);

    const options = {
        hostname: 'api-3scale-apicast-staging.apps.rhlab.ch',
        port: 443,
        path: '/opp/subscribe/?user_key=907d9cb2d50ade43949da576acb63853',
        headers: {
            "Content-Type": "application/json"
        },
        method: 'PUT'
    };

    const request = https.request(options, (response) => { 
    });

    request.on('error', (e) => {
        console.error(e);
    });

    request.write(req.body.data);
    request.end();

    res.json({"message" : "ok"});
  });
  
  return oppty;
}

module.exports = opportunityRoute;
