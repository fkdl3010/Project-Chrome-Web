const body = document.querySelector('body');

const IMG_NUMBER = 7;
const USER_LS_BG = "currentUser";



function paintImage(imgNumber){
    const image = new Image();
    const currentUser = localStorage.getItem(USER_LS_BG);
    if(currentUser === null){
        image.src = `images/1.jpg`;
        image.classList.add('bgImage');
    }else{
        image.src = `images/${imgNumber + 1}.jpg`;
        image.classList.add('bgImage');
    }
    body.appendChild(image);
}

// 가지고있는 사진 개수에 따라 랜덤 생성
function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
init();