const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector('input'),
    toDoLIst = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';

const toDos = [];

// localStorage에 toDos 키로 value를 toDos의 배열로 넣어줌
// localStorage는 String형태만 저장하기때문에 객체 또는 배열을 문자열로 변환하는JSON.stringify 사용
function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

// text를 li에 담아 ul 밑에 뿌려줌, toDos 배열에 담아줌
function paintToDo(text){
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = toDos.length + 1;
    delBtn.innerHTML = '❌';
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoLIst.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = '';
}

// localStorage에 있는 toDo를 가져와 객체로 만든 뒤 화면에 뿌림
function loadToDos(){
    const loadedeToDos = localStorage.getItem(TODOS_LS)
    if(loadedeToDos !== null){
        const parsedToDos = JSON.parse(loadedeToDos);
        console.log(parsedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}


function init(){
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit);
}

init();