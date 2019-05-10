var http = require("https");

var assert = require('assert');

var options = {
  "method": "GET",
  "hostname": "7dal3vydn7.execute-api.us-east-1.amazonaws.com",
  "path": "/default/RestAWSRegionsAPI",
  "headers": {
    "cache-control": "no-cache",
    "Postman-Token": "6d6a84a6-c209-4377-9e71-c88196838ad5"
  }
};

  var req = http.request(options, function (res) {
  try{
    assert(res.statusCode == 200 ,'EXPECTED 200 GOT ' + res.statusCode);
  } catch (ex){
    console.log("FAIL");
    throw(ex); 
  }
  var chunks = [];
  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
  console.log("PASS");
});

req.end();
