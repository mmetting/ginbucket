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
        hostname: 'encrypted.google.com',
        port: 443,
        path: '/',
        body : req.body.data,
        method: 'PUT'
    };

    const reqquest = https.request(options, (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);

        res.on('data', (d) => {
            console.log(d);
        });
    });

    reqquest.on('error', (e) => {
        console.error(e);
    });
    reqquest.end();

    res.json({"message" : "ok"});
  });
  
  return oppty;
}

module.exports = opportunityRoute;
