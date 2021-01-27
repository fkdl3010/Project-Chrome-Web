const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector('input'),
    toDoLIst = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';

let toDos = [];

// 버튼 누르면 li 제거
function deleteToDo(event){
    //console.log(event.target.parentNode);
    //console.log (event.target) 은 버튼을의미
    const btn = event.target;
    const li = btn.parentNode;
    toDoLIst.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    // filter: toDos의 각 인덱스에 대해 forEach를 실행 해 함수 조건에 맞는 인덱스만 추출하여 새로운
    //          배열을 만든다.
    //console.log(cleanToDos);
    toDos = cleanToDos;
    saveToDos();
    
}

// localStorage에 toDos 키로 value를 toDos의 배열로 넣어줌
// localStorage는 String형태만 저장하기때문에 객체 또는 배열을 문자열로 변환하는JSON.stringify 사용
function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

// text를 li에 담아 ul 밑에 뿌려줌, toDos 배열에 담아줌
function paintToDo(text){
    const li = document.createElement('li');
    const delBtn = document.createElement('span');
    const span = document.createElement('span');
    const newId = toDos.length + 1;
    delBtn.innerHTML = '❌';
    delBtn.className = "toDo_button";
    delBtn.addEventListener('click', deleteToDo);
    span.innerText = text;
    li.className = 'list';
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