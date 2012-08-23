jQuery(function ($) {
//浏览器
var ieVer = ieVersion();
//End
});
//Ajax 全局配置
$.ajaxSetup({ contentType : "application/x-www-form-urlencoded; charset=UTF-8" });
//操作 Cookies
var setCookie = function(name,val,days){
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+val+expires+"; path=/";
},
getCookie = function(name){
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
},
removeCookie = function(name){
    setCookie(name,"",-1);
},
//判断是否Windows
isWindows = function(){
    var p = navigator.platform, is = p == 'Win32' || p == 'Windows';
    return is;
},
//浏览器版本检测
ieVersion = function(){
    var ver = 100;
    if ($.browser.msie) {
        ver = parseInt($.browser.version);
    }
    return ver;
},
//中英文客户端判断
userLang = function(){
    var lang = getCookie('lang') || 'zh-cn', navStr = navigator.language || navigator.userLanguage;
    if(navStr.substr(0,2) == 'en') lang = 'en';
    return lang;
},
//删除左右两端的空格
trim = function(str){
    if (str) {
        return $.trim(str);
    } else {
        return '';
    }
},
//删除左边的空格
ltrim = function(str){
    if (str) {
        return str.toString().replace(/(^\s*)/g, "");
    } else {
        return '';
    }
},
//删除右边的空格
rtrim = function(str){
    if (str) {
        return str.toString().replace(/(\s*$)/g, "");
    } else {
        return '';
    }
},
//图片预读
imagePreload = function(images){
    var arr = [], elm = document.createElement('div');
    for(var i=0; i<images.length; i++){
        arr.push('<img src="'+ images[i] +'" />');
    }
    elm.style.display ='none';
    elm.innerHTML = arr.join('');
    document.body.appendChild(elm);
},
//searchParse
searchParse = function(){
    var resultObj = {}, search = window.location.search;
    if(search && search.length > 1){
        search = search.substr(1);
        var items = search.split('&');
        for(var index = 0 ; index < items.length ; index++ ){
            if(!items[index]){
                continue;
            }
            var kv = items[index].split('=');
            resultObj[kv[0]] = typeof kv[1] === "undefined" ? "":kv[1];
        }
    }
    return resultObj;
},
//returnSite
returnSite = function(){
    var href = window.location.host;
    return 'http://' + href + '/';
},
//获取当前时间以yyyy-DD-mm格式显示
getNow = function(dayFix){
    var today = new Date();
    if(dayFix && !isNaN(dayFix/2)){
        today.setDate(today.getDate()+dayFix);
    }
    var year = today.getFullYear().toString(), month = today.getMonth()+1, day = today.getDate();
    month = month >= 10 ? month.toString() : '0'+month.toString();
    day = day >= 10 ? day.toString() : '0'+day.toString();
    return year +'-'+ month +'-'+ day;
}
//获取Timestamp格式的时间
dateTime = function(date){
    var dt = date.split('-');
    var y = 1*dt[0], m = 1*dt[1]-1, d = 1*dt[2];
    return (new Date(y, m, d)).getTime();
};