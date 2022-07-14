var results = document.getElementById("sectionThree");
var results2 = document.getElementById("sectionFour");
var results3 = document.getElementById("sectionFive");
var results4 = document.getElementById("sectionSix");
var results5 = document.getElementById("sectionSeven");
var temp1 = document.getElementById("1");
var hum1 = document.getElementById("2");
var wind1 = document.getElementById("3");
var temp2 = document.getElementById("4");
var hum2 = document.getElementById("5");
var wind2 = document.getElementById("6");
var temp3 = document.getElementById("7");
var hum3 = document.getElementById("8");
var wind3 = document.getElementById("9");
var temp4 = document.getElementById("10");
var hum4 = document.getElementById("11");
var wind4 = document.getElementById("12");
var temp5 = document.getElementById("13");
var hum5 = document.getElementById("14");
var wind5 = document.getElementById("15");

var fetchButton = document.getElementById("search");
var apiKey = "71eadbcc3332b6922fd23f1a79bb230f";
var cityName = document.getElementById("input");

var time = document.getElementById("timeone");
var time2 = document.getElementById("timetwo");
var time3 = document.getElementById("timethree");
var time4 = document.getElementById("timefour");
var time5 = document.getElementById("timefive");
var time6 = document.getElementById("timesix");


function historyTwo() {
    var localStorageContent = localStorage.getItem("names");
    // var freshButton = document.getElementById("newButtons");
    var freshButton = document.getElementById("newButtons");
    if (localStorageContent === null) {
        names = [];
    } else {
        var localStorageArrays = localStorageContent.split(",");
        var bananas = localStorageArrays.pop();
        console.log(bananas);
        console.log(localStorageArrays);
        
        for (let i = 0; i < localStorageArrays.length; i++) {
            var button = document.createElement("button");
            button.id = [i];
            freshButton.appendChild(button);
            button.append(localStorageArrays[i]);
            var divContent = document.getElementById("div");
            var buttonName = button.innerHTML
            var buttname = buttonName.split(",");
            divContent.append(buttname);
            console.log(buttname);

            button.addEventListener("click", papaya);
            function papaya() {
                fetch("https://api.openweathermap.org/data/2.5/weather?q=" + this.innerHTML + "&appid=71eadbcc3332b6922fd23f1a79bb230f")
                .then(response => response.json(Object))
                .then(response => {
                    displayInfo(response);
                })
            }
        
        }
    }
}
historyTwo();


function history() {
    names = [];
    names.push(cityName.value);
    var hist = localStorage.getItem("names");
    names.push(hist);
    localStorage.setItem("names", names);
}


function todaytime() {
    // var today = new Date().toDateString();
    var today = moment().format('DD MMMM').toString();
    var tomorrow = moment().add(1, "days").format('DD MMMM').toString();
    var threeday = moment().add(2, "days").format('DD MMMM').toString();
    var fourday = moment().add(3, "days").format('DD MMMM').toString();
    var fiveday = moment().add(4, "days").format('DD MMMM').toString();
    var sixday = moment().add(5, "days").format('DD MMMM').toString();
    time.append(today);
    time2.append(tomorrow);
    time3.append(threeday);
    time4.append(fourday);
    time5.append(fiveday);
    time6.append(sixday);
}
todaytime();


function getapi() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName.value + "&appid=71eadbcc3332b6922fd23f1a79bb230f")
    .then(response => response.json(Object))
    .then(response => {
        console.log(response);
        displayInfo(response);
        history();
    })
}


function getapi2(lat, lon) {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=751ab17af69ad7d1b04c80c284a0aa6a")
    .then(response => response.json(Object))
    .then(response => {
        console.log(response);
        displayuvi(response);
        fiveday(response);
    })
    
}


function displayuvi(response) {
    var uvi = response.current.uvi;
    results5.append(uvi);
    if (uvi > 1) {
        results5.classList.add("red");
    } else {
        results5.classList.add("green");
    }
}


function fiveday(response) {
    var cityone = response.daily[0].temp.max;
    var humidone = response.daily[0].humidity;
    var windone = response.daily[0].wind_speed;
    var citytwo = response.daily[1].temp.max;
    var humidtwo = response.daily[1].humidity;
    var windtwo = response.daily[1].wind_speed;
    var citythree = response.daily[2].temp.max;
    var humidthree = response.daily[2].humidity;
    var windthree = response.daily[2].wind_speed;
    var cityfour = response.daily[3].temp.max;
    var humidfour = response.daily[3].humidity;
    var windfour = response.daily[3].wind_speed;
    var cityfive = response.daily[4].temp.max;
    var humidfive = response.daily[4].humidity;
    var windfive = response.daily[4].wind_speed;
    wind1.append(windone + " mph");
    hum1.append(humidone + " %");
    temp1.append(cityone + " F*");
    wind2.append(windtwo + " mph");
    hum2.append(humidtwo + " %");
    temp2.append(citytwo + " F*");
    wind3.append(windthree + " mph");
    hum3.append(humidthree + " %");
    temp3.append(citythree + " F*");
    wind4.append(windfour + " mph");
    hum4.append(humidfour + " %");
    temp4.append(cityfour + " F*");
    wind5.append(windfive + " mph");
    hum5.append(humidfive + " %");
    temp5.append(cityfive + " F*");
}


var save1 = document.getElementById("Bone");
var save2 = document.getElementById("Btwo");
var save3 = document.getElementById("Bthree");
var save4 = document.getElementById("Bfour");
var save5 = document.getElementById("Bfive");


function displayInfo(response) {
    var name = response.name;
    var temp = response.main.temp;
    var wind = response.wind.speed;
    var humidity = response.main.humidity;
    var lat = response.coord.lat;
    var lon = response.coord.lon;
    var iconDes = response.weather[0].description;

    var variable = `https://openweathermap.org/img/w/${response.weather[0].icon}.png`
    var image = document.getElementById("image");
    var image1 = document.getElementById("image1");
    var image2 = document.getElementById("image2");
    var image3 = document.getElementById("image3");
    var image4 = document.getElementById("image4");
    var image5 = document.getElementById("image5");
    image.setAttribute("src", variable);
    image.setAttribute("alt", iconDes);
    image1.setAttribute("src", variable);
    image1.setAttribute("alt", iconDes);
    image2.setAttribute("src", variable);
    image2.setAttribute("alt", iconDes);
    image3.setAttribute("src", variable);
    image3.setAttribute("alt", iconDes);
    image4.setAttribute("src", variable);
    image4.setAttribute("alt", iconDes);
    image5.setAttribute("src", variable);
    image5.setAttribute("alt", iconDes);

    results.append(name);
    results2.append(temp + " F*");
    results3.append(wind + " mph");
    results4.append(humidity + " %");
    getapi2(lat, lon);

}


fetchButton.addEventListener('click', getapi);

