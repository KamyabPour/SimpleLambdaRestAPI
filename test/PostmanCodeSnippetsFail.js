var http = require("https");

var options = {
  "method": "DELETE",
  "hostname": "7dal3vydn7.execute-api.us-east-1.amazonaws.com",
  "path": "/default/RestAWSRegionsAPI",
  "headers": {
    "cache-control": "no-cache",
    "Postman-Token": "943e6338-57ca-4ba5-976c-d20829068c60"
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
