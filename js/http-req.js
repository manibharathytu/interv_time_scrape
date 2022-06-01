var http = require('https');


var responseCallBack;

function handleRawRespStream(response) {
    var str = '';

    response.on('data', function (chunk) {
        str += chunk;
    });

    response.on('end', function () {
        responseCallBack(str)
    });
}


 function httpReq(options, respCb){
    responseCallBack = respCb
    http.request(options, handleRawRespStream).end();

}

module.exports=httpReq