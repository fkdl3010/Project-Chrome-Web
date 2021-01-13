const title = document.getElementById("title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = 'rgb(52, 152, 219)';

function handleClick() {
  const currentColor = title.style.color;
  if(currentColor === BASE_COLOR){
    title.style.color = OTHER_COLOR;
  }else{
    title.style.color = BASE_COLOR;
  }
  
}
function init() {
    title.addEventListener("mouseenter", handleClick);
    title.style.color = BASE_COLOR;
  }
init();
