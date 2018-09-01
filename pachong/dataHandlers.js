module.exports = {
    hd50: function ($, successCallback) {
        var vals = []; // 开奖号码
        var times = []; // 时间
        var nos = []; // 期数
        var zuhenos = []; // 开奖号码组合
        $(".particulars>ul").each(function (idx, element) {
            var $element = $(element);
            vals.push(parseInt($element.find(".next-bg").text()));
            var temp = $element.find(".one").find("b").text().trim();
            times.push(temp);
            temp = $element.find(".one").find("h6").text().trim();
            temp = temp.substring(1);
            temp = parseInt(temp);
            nos.push(temp);

            var z1 = $(element).find('.next').find('b').eq(0).text().trim();
            var z2 = $(element).find('.next').find('b').eq(1).text().trim();
            var z3 = $(element).find('.next').find('b').eq(2).text().trim();
            zuhenos.push(z1 + z2 + z3);
        });
        var dataOut = {
            periods: nos,
            anumbers: vals,
            atimes: times,
            azuhes: zuhenos
        }
        successCallback(dataOut);
    },
    hd200_jnd: function ($, successCallback) {
        hd200core($, successCallback, '.orangeball');
    },
    hd200_pcdd: function ($, successCallback) {
        hd200core($, successCallback, '.redball');
    }
}

function hd200core ($, successCallback, cls) {
    var vals = []; // 开奖号码
    var times = []; // 时间
    var nos = []; // 期数
    var zuhenos = []; // 开奖号码组合
    $(".datalist>div").each(function (idx, element) {
        if (idx > 1) {
            var el = $(element);
            vals.push(parseInt(el.find(cls).text().trim()));
            times.push(el.find('.am-u-sm-4').text().trim());
            nos.push(el.find('.am-u-sm-3').text().trim());

            var temp = el.find('.am-u-sm-5').text().trim();
            temp = temp.split('=');
            temp = temp[0];
            temp = temp.replace(/\+/ig, '');
            zuhenos.push(temp);
        }
    });
    var dataOut = {
        periods: nos,
        anumbers: vals,
        atimes: times,
        azuhes: zuhenos
    }
    successCallback(dataOut);
}
