//浏览器版本检测
var ieVersion = function(){
    var ver = 100,
    ie = (function(){
        var undef,
            v = 3,
            div = document.createElement('div'),
            all = div.getElementsByTagName('i');
        while (
            div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
            all[0]
        );
        return v > 4 ? v : undef;
    }());
    if(ie) ver = ie;
    return ver;
},
//判断是否Windows
isWindows = function(){
    var p = navigator.platform, is = p == 'Win32' || p == 'Windows';
    return is;
},
isWebkit = function(){
    var bool =  false;
    if('WebkitTransform' in document.documentElement.style) bool = true;
    return bool;
};