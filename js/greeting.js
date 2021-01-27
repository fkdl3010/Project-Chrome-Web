const nameContainer = document.querySelector('.js-name');
const greeting = document.querySelector('.js-greetings');

const USER_LS = "currentUser";
const SHOWING_CN = 'showing';

function handleChangeUser(event){
    event.stopPropagation();
    localStorage.removeItem(USER_LS);
    nameContainer.innerHTML = '';
    const currentUser = localStorage.getItem(USER_LS);
    paintGreeting(currentUser);
}

function paintName(name){
    nameContainer.innerHTML = '';
    const title = document.createElement('span');
    title.className = "name_text";
    title.innerHTML = `Hello ${name}`;
    const delBtn = document.createElement('span');
    delBtn.addEventListener('click', handleChangeUser);
    delBtn.innerHTML = '<i class="fas fa-backspace"></i>';
    delBtn.className = 'change_User';
    nameContainer.appendChild(title);
    nameContainer.appendChild(delBtn);
}

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmitName(event){
    event.preventDefault();
    console.log(event);
    const form = event.target;
    const input = form.querySelector('input');
    const currentValue = input.value;
    console.log(currentValue);
    saveName(currentValue);
    paintName(currentValue);
}


function paintGreeting(text){
    const input = document.createElement('input');
    input.placeholder = 'What is your name?';
    input.type = 'text';
    input.className = "name__input";
    const form = document.createElement('form');
    form.addEventListener('submit',handleSubmitName);
    form.appendChild(input);
    nameContainer.appendChild(form);
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        paintGreeting(currentUser);
    }else{
        paintName(currentUser);
    }
}

function init(){
loadName();
}

init();