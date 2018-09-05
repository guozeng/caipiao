var requ = require('./requ');
var urls = require('./dataUrls');
var dataHandlers = require('./dataHandlers');
module.exports = {
    getYn28: function (successCallback, errCallback) {
        requ(urls.yn28, dataHandlers.hd50, errCallback, successCallback);
    },
    getJnd28: function (successCallback, errCallback) {
        requ(urls.jnd28, dataHandlers.hd200_jnd, errCallback, successCallback);

    },
    getJnd28_2: function (successCallback, errCallback) {
        requ(urls.jnd28_2, dataHandlers.hd50, errCallback, successCallback);

    },
    getPcdd: function (successCallback, errCallback) {
        requ(urls.pcdd, dataHandlers.hd200_pcdd, errCallback, successCallback);
    },
    getPcdd_2: function (successCallback, errCallback) {
        requ(urls.pcdd_2, dataHandlers.hd50, errCallback, successCallback);
    }
}