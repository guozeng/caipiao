function computeOther (dataArr) {
    dataArr = dataArr || [];
    var ret = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    var i, len = dataArr.length;
    var hs = [3, 6, 9, 12, 15, 18, 21, 24];
    var ls = [1, 4, 7, 10, 16, 19, 22, 25];
    var lans = [2, 5, 8, 11, 17, 20, 23, 26];
    for (i = 0; i < len; i ++) {
        var temp = parseInt(dataArr[i].val);
        if (temp > 21) {
            break;
        } else {
            ret[0] ++;
        }
    }
    for (i = 0; i < len; i ++) {
        var temp = parseInt(dataArr[i].val);
        if (temp < 6) {
            break;
        } else {
            ret[1] ++;
        }
    }
    for (i = 0; i < len; i ++) {
        var temp = parseInt(dataArr[i].val);
        if (inArray(temp, hs)) {
            break;
        } else {
            ret[2] ++;
        }
    }
    for (i = 0; i < len; i ++) {
        var temp = parseInt(dataArr[i].val);
        if (inArray(temp, ls)) {
            break;
        } else {
            ret[3] ++;
        }
    }
    for (i = 0; i < len; i ++) {
        var temp = parseInt(dataArr[i].val);
        if (inArray(temp, lans)) {
            break;
        } else {
            ret[4] ++;
        }
    }
    for (i = 0; i < len; i ++) {
        var temp = parseInt(dataArr[i].val);
        if (temp === 13) {
            break;
        } else {
            ret[5] ++;
        }
    }
    for (i = 0; i < len; i ++) {
        var temp = parseInt(dataArr[i].val);
        if (temp === 14) {
            break;
        } else {
            ret[6] ++;
        }
    }
    for (i = 0; i < len; i ++) {
        var temp = parseInt(dataArr[i].val);
        if (temp === 12) {
            break;
        } else {
            ret[7] ++;
        }
    }
    for (i = 0; i < len; i ++) {
        var temp = parseInt(dataArr[i].val);
        if (temp === 15) {
            break;
        } else {
            ret[8] ++;
        }
    }
    return ret;
}
function inArray (item, arr) {
    var f = false;
    for (var i = 0; i < arr.length; i ++) {
        if (arr[i] === item) {
            f = true;
            break;
        }
    }
    return f;
}
module.exports = computeOther;