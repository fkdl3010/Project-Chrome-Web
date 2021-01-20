const COORDS = 'coords';

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
    }
}

function init(){
    loadCoords();
}

init();