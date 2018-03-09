# Mappy Cloud App
This cloud app facilitates the communication with Salesforce.

User can download opportunities and subscribe for changes

# Group Mappy API

# opportunities [/opportunities]

'Opportunities' endpoint.

## hello [GET] 

+ Request (application/json)
    + Body
            {
              
            }

+ Response 200 (application/json)
    + Body
            {
              "id" : "1",
              "name" : "Acme Inc. - OpenShift",
              "dealSize" : 780000,
              "status" : "Propose",
              "subscribed" : false  
            }

## Build
```shell
npm install
```

## Run locally

### Start the server

```shell
npm run serve
```

The Hello World server will be availble at `localhost:8001`.

If you wish to run the server on a different port you should set the `FH_PORT`
environment variable to the port you want the server to run on.

## Debug

```shell
npm run debug
```

Visit http://127.0.0.1:8080/?port=5858 to start debugging.

## Development

See [Cloud Development](http://docs.feedhenry.com/v2/cloud_development.html) page about how to develop cloud app.