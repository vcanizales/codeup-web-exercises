$(function() {
    //map
    mapboxgl.accessToken = MAPBOX_API_TOKEN;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        // 'mapbox://styles/mapbox/satellite-v9',
        center: [-80.1891, 25.8059], // starting position [lng, lat]
        zoom: 5, // starting zoom
        projection: 'globe' // display the map as a 3D globe
    });
        map.on('style.load', () => {
            map.setFog({}); // Set the default atmosphere style
    });


    //Declaring days of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat: 29.423017,
        lon: -98.48527,
        units: "imperial" // this is fahrenheit
    }).done(function (data) {
        displayWeather(data);
    });

    //Functionality to the Search Bar
    document.getElementById('clickMe').addEventListener('click', function(e){
        e.preventDefault();
        const address=document.getElementById('searchBar').value;
        console.log(address);
        geocode(address, MAPBOX_API_TOKEN).then(function (coordinates){
            console.log(coordinates);
            //Setting Markers for Search
            const userMarker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
            map.setCenter(coordinates);
            refreshWeather(coordinates);
            //Empties previous search
            $(".weather-predictions").empty();
        });
    });

    // $.get("https://api.openweathermap.org/data/2.5/weather", {
    //     APPID: OPEN_WEATHER_APPID,
    //     lat: 29.423017,
    //     lon: -98.48527,
    //     units: "imperial"
    // }).done(function(data) {
    //     console.log(data);
    //     refreshWeather(data);
    // });
    function namedDayFromDay(timeStamp){
        let dateTime = new Date(timeStamp * 1000);
        return daysOfWeek[dateTime.getDay()];
    }
    //Declaring wind directions
    function windCardinalDirection(degrees) {
        let cardinalDirection = '';
        if ((degrees > 348.75 && degrees <= 360) || (degrees >= 0 && degrees <= 11.25)) {
            cardinalDirection = "N";
        } else if (degrees > 11.25 && degrees <= 33.75) {
            cardinalDirection = "NNE";
        } else if (degrees > 33.75 && degrees <= 56.25) {
            cardinalDirection = "NE";
        } else if (degrees > 56.25 && degrees <= 78.75) {
            cardinalDirection = "ENE";
        } else if (degrees > 78.75 && degrees <= 101.25) {
            cardinalDirection = "E";
        } else if (degrees > 101.25 && degrees <= 123.75) {
            cardinalDirection = "ESE";
        } else if (degrees > 123.75 && degrees <= 146.25) {
            cardinalDirection = "SE";
        } else if (degrees > 146.25 && degrees <= 168.75) {
            cardinalDirection = "SSE";
        } else if (degrees > 168.75 && degrees <= 191.25) {
            cardinalDirection = "S";
        } else if (degrees > 191.25 && degrees <= 213.75) {
            cardinalDirection = "SSW";
        } else if (degrees > 213.75 && degrees <= 236.25) {
            cardinalDirection = "SW";
        } else if (degrees > 236.25 && degrees <= 258.75) {
            cardinalDirection = "WSW";
        } else if (degrees > 258.75 && degrees <= 281.25) {
            cardinalDirection = "W";
        } else if (degrees > 281.25 && degrees <= 303.75) {
            cardinalDirection = "WNW";
        } else if (degrees > 303.75 && degrees <= 326.25) {
            cardinalDirection = "NW";
        } else if (degrees > 326.75 && degrees <= 348.75) {
            cardinalDirection = "NNW";
        }
        return cardinalDirection;
    }


    // Setting up cards with functionality to current temp
    // $.get("https://api.openweathermap.org/data/2.5/forecast/", {
    //     APPID: OPEN_WEATHER_APPID,
    //     lat: 29.423017,
    //     lon: -98.48527,
    //     units: "imperial"
    // }).done (
    function displayWeather(data) {
        data.list.forEach((forecast, i) =>{
            console.log(i);
            // console.log(data.list[i]);
            //$(".weather-predictions")
            // data.list.forEach((forecast, i) => {
            //     console.log(data);
            if(i % 8 === 0) {
                // console.log("inside if i%8===0: " + i);
                $(`#weather-predictions`).append(`
                        <div class="card col-2 text-center">
                            <p>
                                <img class="card-img-top" src="http://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png"  alt="Card image cap" style="height: 100px; width: 100px;">
                            </p>
                            <p>Current Date ${data.list[i].dt_txt.split(' ')[0]}</p>
                            <p>The current temperature is ${data.list[i].main.temp}</p>
                            <p>Description: ${data.list[i].weather[0].description}</p>
                            <p>Humidity: ${data.list[i].main.humidity}</p>
                            <p>Wind Speed: ${data.list[i].wind.speed}</p>
                            <p>Pressure: ${data.list[i].main.pressure}</p>
                        </div>`);
            }
        });
    };
    // });

    //Function to update the weather
    function refreshWeather(coordinates) {
        console.log(coordinates[0]);
        console.log(coordinates[1]);
        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: OPEN_WEATHER_APPID,
            lat: coordinates[1],
            lon: coordinates[0],
            units: "imperial" // this is fahrenheit
        }).done(function (data) {
            console.log("completed updateWeather get request");
            displayWeather(data);
        });
    }

});

    // //Making markers for users to add it to the map
    // const marker = new mapboxgl.Marker().setLngLat(-98.48527,29.423017).addTo(map);





    //
    // function appendLeadingZeroes(n) {
    //     if (n <= 9) {
    //         return "0" + n;
    //     }
    //     return n;
    // }
    //
    // const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    //
    // function formatTime(timeStamp) {
    //     let dateTime = new Date(timeStamp * 1000);
    //     let year = dateTime.getFullYear();
    //     let month = months[dateTime.getMonth()];
    //     let day = dateTime.getDate();
    //     let hour = appendLeadingZeroes(dateTime.getHours());
    //     let minutes = appendLeadingZeroes(dateTime.getMinutes());
    //     let seconds = appendLeadingZeroes(dateTime.getSeconds());
    //     let formattedDateTime = month + " " + day + " " + year + " " + hour + ":" + minutes + ":" + seconds;
    //     return formattedDateTime;
    // }

    // $.get("http://api.openweathermap.org/data/2.5/weather", {
    //     APPID: OPEN_WEATHER_APPID,
    //     lat: 29.423017,
    //     lon: -98.48527,
    //     units: "imperial"
    // }).done(function (data) {
    //     console.log("current weather");
    //     console.log(data);
    //     console.log(data.main.temp);
    //     console.log(data.wind.speed);
    //     console.log(windCardinalDirection(data.wind.deg));
    //     $('body').append(`<p>The current temperature is ${data.main.temp}`);
    // });












