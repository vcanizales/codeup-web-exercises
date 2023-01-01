$(function() {

    //Displays map with current location being San Antonio, TX
    mapboxgl.accessToken = MAPBOX_API_TOKEN;
    const coordinates = document.getElementById('coordinates')
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        // 'mapbox://styles/mapbox/satellite-v9',
        center: [-98.4916, 29.4252], // starting position [lng, lat]
        zoom: 3, // starting zoom
        projection: 'globe' // display the map as a 3D globe
    });
    map.on('style.load', () => {
        map.setFog({}); // Set the default atmosphere style
        map.setCenter([-98.4916, 29.4252]);
    });
        // const nav = new mapboxgl.NavigationControl();
        const marker = new mapboxgl.Marker({
            draggable: true
        })
        // map.addControl(nav, 'top-right');
            .setLngLat([-98.4916, 29.4252])
            .addTo(map);

    function onDragEnd() {
        const lngLat = marker.getLngLat();
        coordinates.style.display = 'block';
        coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
        let coords = [
            `${lngLat.lng}`,
            `${lngLat.lat}`
        ]
        refreshWeather(coords);
    }
    marker.on('dragend', onDragEnd);


    //Weather Map API with San Antonio, TX location
    $.get("https://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat: 29.423017,
        lon: -98.48527,
        units: "imperial" // this is fahrenheit
    }).done(function (data) {
        console.log()
        displayWeather(data);
    });

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


    // Setting up cards with functionality to current temperature
    function displayWeather(data) {
        data.list.forEach((forecast, i) => {
            console.log(i);
            if (i % 8 === 0) {
                $(`#weather-predictions`).append(`
                        <div class="card col-2 text-center">
                            <p>
                                <img class="card-img-top" src="https://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png"  alt="Card image cap" style="height: 100px; width: 100px;">
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

    // Allows user to drag marker, set a new location and update 5-day forecast
    map.on('click',(e) => {
        $(".mapboxgl-marker").remove();
        const userMarker = new mapboxgl.Marker({
            color: 'black',
            draggable: true})
            .setLngLat(e.lngLat)
            .addTo(map);
        map.setCenter(e.lngLat)
        map.setZoom(3)
        $.get("https://api.openweathermap.org/data/2.5/forecast", {
            APPID: OPEN_WEATHER_APPID,
            lat: e.lngLat.lat,
            lon: e.lngLat.lng,
            units: "imperial"
        }).done(function (data) {
            displayWeather(data);
            // Empties previous search
            // $(".weather-predictions").empty();
            // Updates current location
            $("#currentLocation").html(`Current Location: ${data.city.name}`);

        });
    });


    //Functionality for Search Bar
    document.getElementById('clickMe').addEventListener('click', function (e) {
        e.preventDefault();
        const address = document.getElementById('searchBar').value;
        console.log(address);
        geocode(address, MAPBOX_API_TOKEN).then(function (coordinates) {
            console.log(coordinates);
            //Setting Markers for Search
            const marker = new mapboxgl.Marker({
                draggable: true})
                .setLngLat(coordinates)
                .addTo(map);
            map.setCenter(coordinates);
            map.setZoom(3)
            refreshWeather(coordinates);
            // Empties previous search
            $(".weather-predictions").empty();
        });
    });
});


//need to fix how cards merge with another and update location on nav when conducting a manual search













