var http = require("https");

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
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
