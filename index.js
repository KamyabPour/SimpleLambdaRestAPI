exports.handler = async (event, context, callback) => {
     const awsRegions = require('aws-regions')
  
     console.log(awsRegions.list())
 
     const response = {
         statusCode: 200,
         body: JSON.stringify(awsRegions.list()),
     };
     
     const done = (err, res) => callback(null, {
         statusCode: err ? '400' : '200',
         body: err ? err.message : JSON.stringify(res),
         headers: {
             'Content-Type': 'application/json',
         },
     });
 
     switch (event.httpMethod) {
         case 'GET':
             done(null,response);
             break;
         case 'POST':
             done(null,response);
             break;
         default:
             done(new Error(`Unsupported method "${event.httpMethod}"`));
     }
 };
