$(function(){

    // $.get("https://api.openweathermap.org/data/2.5/onecall", {
    //     APPID: OPEN_WEATHER_APPID,
    //     lat: 29.423017,
    //     lon: -98.48527
    // }).done(function(data) {
    //     console.log(data);
    // });


    // $.get("https://api.openweathermap.org/data/2.5/weather", {
    //     APPID: OPEN_WEATHER_APPID,
    //     q:     "San Antonio, US"
    // }).done(function(data) {
    //     console.log(data);
    // });

    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat:    29.423017,
        lon:   -98.48527,
        units: "imperial"
    }).done(function(data) {
        console.log(data);
        console.log("current weather");
        // console.log(data.city.name);
        // data.list.forEach((forecast, index) => {
        //     index < 5 ? console.log(forecast) : ''
        // })
    });
});