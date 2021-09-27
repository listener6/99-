var box = document.querySelector('.box');//选中box

var table = document.createElement('table');//创建table标签
for( var i = 1; i <= 9; i++ ) {
    var tr = document.createElement('tr');//创建tr标签
    for( var j = 1; j <= i; j++ ) {
        var td = document.createElement('td');//创建td标签
        td.innerText = j + '*' + i + '=' + i*j;//js中的数学运算与实际中的数学运算一致
        tr.append( td );//在tr中添加td
    };
    table.append( tr );//在table中添加tr
};

box.append(table);