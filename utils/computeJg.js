// 计算间隔
function computeJg (dataArr) {
    dataArr = dataArr || [];
    var len = dataArr.length;
    var i;
    var jgarr = [0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 0; i < len; i ++) {
        var val = dataArr[i].val;
        val = parseInt(val);
        if (val < 14) {
            jgarr[0] ++;
        } else {
            break;
        }
    }
    for (i = 0; i < len; i ++) {
        var val = dataArr[i].val;
        val = parseInt(val);
        if (val > 13) {
            jgarr[1] ++;
        } else {
            break;
        }
    }
    for (i = 0; i < len; i ++) {
        var val = dataArr[i].val;
        val = parseInt(val);
        if (val % 2 === 0) {
            jgarr[2] ++;
        } else {
            break;
        }
    }
    for (i = 0; i < len; i ++) {
        var val = dataArr[i].val;
        val = parseInt(val);
        if (val % 2 === 1) {
            jgarr[3] ++;
        } else {
            break;
        }
    }
    for (i = 0; i < len; i ++) {
        var val = dataArr[i].val;
        val = parseInt(val);
        if (val > 13 && val % 2 === 1) {
            break;
        } else {
            jgarr[4] ++;
        }
    }
    for (i = 0; i < len; i ++) {
        var val = dataArr[i].val;
        val = parseInt(val);
        if (val > 13 && val % 2 === 0 && val !== 14) {
            break;
        } else {
            jgarr[5] ++;
        }
    }
    for (i = 0; i < len; i ++) {
        var val = dataArr[i].val;
        val = parseInt(val);
        if (val < 14 && val % 2 === 1  && val !== 13) {
            break;
        } else {
            jgarr[6] ++;
        }
    }
    for (i = 0; i < len; i ++) {
        var val = dataArr[i].val;
        val = parseInt(val);
        if (val < 14 && val % 2 === 0) {
            break;
        } else {
            jgarr[7] ++;
        }
    }
    return jgarr;
}
module.exports = computeJg;