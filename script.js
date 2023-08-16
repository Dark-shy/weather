feather.replace()
const week = ["Mon","Tue","Wed","Thu","Fir","Sat","Sun"];
const weeks= ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

// 创建一个新的 XMLHttpRequest 对象
var xhr = new XMLHttpRequest();

// 设置请求的类型、URL 以及是否异步
xhr.open('GET', 'https://restapi.amap.com/v3/weather/weatherInfo?city=610100&key=<your.KEY>&extensions=all', true);
 // 发送请求
    xhr.send();
// 监听请求完成的事件
xhr.onload = function() {
    if (xhr.status === 200) {
    // 当请求成功时，可以在这里处理返回的数据
    var data = JSON.parse(xhr.responseText);

    // 获取天气信息

    document.getElementById("city").innerText = data.forecasts[0].city;
    document.getElementById("date").innerText = data.forecasts[0].casts[0].date;
    document.getElementById("weeks").innerText = weeks[data.forecasts[0].casts[0].week - 1];
    document.getElementById("weather").innerText = data.forecasts[0].casts[0].dayweather;
    document.getElementById("week").innerText = week[data.forecasts[0].casts[0].week - 1];
    document.getElementById("wind").innerText = data.forecasts[0].casts[0].daywind; 
    document.getElementById("temperature").innerText = data.forecasts[0].casts[0].daytemp + "℃";
    document.getElementById("temperature0").innerText = data.forecasts[0].casts[0].daytemp + "℃";  
    document.getElementById("windpower").innerText = data.forecasts[0].casts[0].daypower + "级"; 
    
    // document.getElementById("weather1").innerText = data.forecasts[0].casts[1].dayweather;
    document.getElementById("week1").innerText = week[data.forecasts[0].casts[1].week];
    document.getElementById("temperature1").innerText = data.forecasts[0].casts[1].daytemp + "℃";
    
    // document.getElementById("weather2").innerText = data.forecasts[0].casts[2].dayweather;
    document.getElementById("week2").innerText = week[data.forecasts[0].casts[2].week];
    document.getElementById("temperature2").innerText = data.forecasts[0].casts[2].daytemp + "℃";
    
    // document.getElementById("weather3").innerText = data.forecasts[0].casts[3].dayweather;
    document.getElementById("week3").innerText = week[data.forecasts[0].casts[3].week];
    document.getElementById("temperature3").innerText = data.forecasts[0].casts[3].daytemp + "℃";

}else{
    //
}
};
