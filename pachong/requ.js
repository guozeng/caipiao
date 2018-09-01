var cheerio = require('cheerio');
var superagent = require('superagent');

function getData (url, handler, errorCallback, successCallback) {
    superagent.get(url)
    .end(function (err, sres) {
        if (err) {
            errorCallback(err);
            return;
        }
        var $ = cheerio.load(sres.text);
        handler($, successCallback);
    });
}

module.exports = getData;