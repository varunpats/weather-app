let weather = {
    apiKey : "ba58a876e318397a75407aaf3d1bee19",
    fetchWeather : function(city) {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ba58a876e318397a75407aaf3d1bee19`
        )
        .then((response) => response.json())
        .then((data)=> this.displayWeather(data))
    },
    displayWeather : function(data) {
        const { name } = data;
        const { icon, description} = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".temp").innerText = Math.round(temp) + "°C";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity +"%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed +"km/h";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + description + "')";
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
    },
    search: function(city) {
        this.fetchWeather(city);
    }
}

document.querySelector(".search button").addEventListener("click", function(){
    weather.search(document.querySelector(".search-bar").value);
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key == "Enter")
        weather.search(document.querySelector(".search-bar").value);
});

weather.fetchWeather("Pune");