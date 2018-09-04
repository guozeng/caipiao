(function () {
    var t_zoushi = $('#t_zoushi');
    t_zoushi.find('tr').each(function (idx, element) {
        if (idx > 1) {
            var n1 = $(element).attr('name1');
            var n2 = $(element).attr('name2');
            var n3 = $(element).attr('name3');
            $(element).find('td').each(function (idex, elem) {
                var name = $(elem).attr('name');
                if (name === n1 || name === n2 || name === n3) {
                    $(elem).text(name);
                    $(elem).addClass('cw');
                    switch (name) {
                        case '大' :
                            $(elem).addClass('bg1');
                            break;
                        case '小' :
                            $(elem).addClass('bg2');
                            break;
                        case '单' :
                            $(elem).addClass('bg3');
                            break;
                        case '双' :
                            $(elem).addClass('bg4');
                            break;
                        case '大单' :
                            $(elem).addClass('bg3');
                            break;
                        case '大双' :
                            $(elem).addClass('bg5');
                            break;
                        case '小单' :
                            $(elem).addClass('bg3');
                            break;
                        case '小双' :
                            $(elem).addClass('bg4');
                            break;
                    }
                }
            });
        }
    });
    var pathname = location.pathname;
    var nav = $('#nav');
    if (pathname === '/pcdd') {
        nav.find('a').eq(1).addClass('nav_hover');
    } else if (pathname === '/yn28') {
        nav.find('a').eq(2).addClass('nav_hover');
    } else {
        nav.find('a').eq(0).addClass('nav_hover');
    }
})();