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
    var password = querystring.parse(query)["password"];
    response.write('Hello '+ name +',your password is '+ password);
    response.end();
}

http.createServer(onrequest).listen(8000);
console.log("server has started");