const reBtn = document.querySelector('.refresh-ico');

function handlereBtn(){
  location.reload(true);
  
}

function addEvent(){
  reBtn.addEventListener('click',handlereBtn);
}

function init(){
  addEvent();
}

init();