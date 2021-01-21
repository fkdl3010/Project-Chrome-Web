const COORDS = 'coords';
// openweathermap 에서 받아온 키
const API_KEY = '6f79de1a3740b92afbe3573875b56559';

// 요청 url 값
// lat, lng 위도 경도
function getWeather(lat, lon){
    fetch(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude, // latitude==latitude
        longitude // longitude==longitude
    }
    saveCoords(coordsObj);
    getWeather(latitude, longitude)
}

function handleGeoError(){
    console.log('Cant accesss geo location');
}

// 좌표를 받아오는 navigator의 geolocation 속성의 getCurrentPosition메소드
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null){
        askForCoords();
    }else{
        // getWeather
        const parseCoords = JSON.parse(loadedCords);
        console.log(loadedCords);
    }
}

function init(){
    loadCoords();
}

init();