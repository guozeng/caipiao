module.exports = {
    hd50: function ($, successCallback) {
        var ret = [];
        $(".particulars>ul").each(function (idx, element) {
            var $element = $(element);
            var obj = {};
            obj.val = parseInt($element.find(".next-bg").text()); // 开奖号码
            var temp = $element.find(".one").find("b").text().trim();
            obj.time = temp;  // 开奖时间
            temp = $element.find(".one").find("h6").text().trim();
            temp = temp.substring(1);
            temp = parseInt(temp);
            obj.no = temp; // 开奖期数

            var z1 = $(element).find('.next').find('b').eq(0).text().trim();
            var z2 = $(element).find('.next').find('b').eq(1).text().trim();
            var z3 = $(element).find('.next').find('b').eq(2).text().trim();
            obj.zuheno = z1 + z2 + z3; // 开奖组合
            obj = fomat(obj);
            ret.push(obj);
        });
        successCallback(ret);
    },
    hd200_jnd: function ($, successCallback) {
        hd200core($, successCallback, '.orangeball');
    },
    hd200_pcdd: function ($, successCallback) {
        hd200core($, successCallback, '.redball');
    }
}

function hd200core ($, successCallback, cls) {
    var ret = []; 
    $(".datalist>div").each(function (idx, element) {
        if (idx > 1) {
            var el = $(element);
            var obj = {};
            obj.val = parseInt(el.find(cls).text().trim());// 开奖号码
            obj.time = el.find('.am-u-sm-4').text().trim();// 时间
            obj.no = el.find('.am-u-sm-3').text().trim();// 期数

            var temp = el.find('.am-u-sm-5').text().trim();
            temp = temp.split('=');
            temp = temp[0];
            temp = temp.replace(/\+/ig, '');
            obj.zuheno = temp;// 开奖号码组合
            obj = fomat(obj);
            ret.push(obj);
        }
    });
    successCallback(ret);
}

function fomat (obj) {
    var val = obj.val;
    if (val < 14) {
        obj.name1 = '小';
        if (val % 2 === 0) {
            obj.name2 = '双';
            obj.name3 = '小双';
        } else {
            obj.name2 = '单';
            obj.name3 = '小单';
        }
    } else if (val > 13) {
        obj.name1 = '大';
        if (val % 2 === 0) {
            obj.name2 = '双';
            obj.name3 = '大双';
        } else {
            obj.name2 = '单';
            obj.name3 = '大单';
        }
    }
    if (obj.val < 10) {
        obj.val = '0' + obj.val;
    }
    obj.no = '' + obj.no;
    var len = obj.no.length;
    if (len > 7) {
        obj.no = obj.no.substring(len - 7);
    }
    return obj;
}