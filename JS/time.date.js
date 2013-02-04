//获取当前时间以yyyy-DD-mm格式显示
var getNow = function(dayFix){
    var today = new Date();
    if(dayFix && !isNaN(dayFix/2)){
        today.setDate(today.getDate()+dayFix);
    }
    var year = today.getFullYear().toString(), month = today.getMonth()+1, day = today.getDate();
    month = month >= 10 ? month.toString() : '0'+month.toString();
    day = day >= 10 ? day.toString() : '0'+day.toString();
    return year +'-'+ month +'-'+ day;
},
//获取Timestamp格式的时间
dateTime = function(date){
    var dt = date.split('-');
    var y = 1*dt[0], m = 1*dt[1]-1, d = 1*dt[2];
    return (new Date(y, m, d)).getTime();
},
getTimestamp = function(){
    return new Date().getTime();
},
timestampDate = function(time){
    if(time/10000000000<1) time *= 1000;
    var date = new Date(time);
    return date.toLocaleString();
};