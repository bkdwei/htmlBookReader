 var files =["1Python3教程.html",
"2Python3基础语法.html",
"3Python3编程第一步.html",
"4Python3基本数据类型.html",
"5Python3解释器.html",
"6Python3注释.html",
"7Python3运算符.html",
"8Python3数字(Number).html",
"9Python3字符串.html",
"10Python3列表.html",
"11Python3元组.html",
"12Python3字典.html",
"13Python3条件控制.html",
"14Python3循环.html",
"15Python3迭代器与生成器.html",
"16Python3函数.html",
"17Python3数据结构.html",
"18Python3模块.html",
"19Python3输入和输出.html",
"20Python3File方法.html",
"21Python3OS文件-目录方法.html",
"22Python3错误和异常.html",
"23Python3面向对象.html",
"24Python3标准库概览.html",
"25Python3实例.html",
"26Python3正则表达式.html",
"28Python3MySQL数据库连接.html",
"29Python3网络编程.html",
"30Python3SMTP发送邮件.html",
"31Python3多线程.html",
"32Python3XML解析.html",
"33Python3JSON数据解析.html"];

function showContent(event) {
    event.preventDefault();
    var target = event.target;
    var fileName = event.target.innerText;
    console.log(fileName);
    parent.document.getElementById('contentFrame').src = fileName + ".html";
}

window.onload = function() {
    var catelogHtml = "";

    catelogHtml += "<ul>";
    var tmpFileName;
    for (var i = 0; i < files.length; i++) {
        tmpFileName = files[i].replace(".html", "");
        catelogHtml = catelogHtml + "<li><a href='#' onclick='showContent(event)'>" + tmpFileName + "</a></li>";

    }
    catelogHtml += "</ul>";
    document.getElementById("catelog").innerHTML = catelogHtml;
};
