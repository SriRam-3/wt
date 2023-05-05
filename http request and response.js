const { request } = require("http");

http  = require("http");
url = require("url");
querystring = require("querystring");
function onrequest(request,response)
{
    var path =url.parse(request.url).pathname;
    console.log("request recieved");
    var query = url.parse(request.url).query;
    console.log(query);
    var name = querystring.parse(query)["username"];
    var email = querystring.parse(query)["email"];
    response.write('Hello '+name+',your email id is '+email);
    response.end();
}

http.createServer(onrequest).listen(8000);
console.log("server has started");
