const body = document.querySelector('body');

const IMG_NUMBER = 7;



function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add('bgImage');
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